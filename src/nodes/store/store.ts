import type { Edge, Node } from "@xyflow/react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Case } from "../hooks/useData";
import type { NodeNameTypes, Position } from "../types";

type Store = {
	files: Record<
		string,
		| {
				nodes: TypedNode[];
				edges: Edge[];
		  }
		| undefined
	>;
	defaultEdgeType: string;
	actions: Actions;
};

export interface TypedNode extends Node {
	data: {
		variable?: string;
		cases?: Case[];
		text?: string;
		character?: string;
		key?: string;
		value?: string;
	};
}

type Actions = {
	setNodes: (nodes: TypedNode[], fileName: string) => void;
	setEdges: (edges: Edge[], fileName: string) => void;
	addNode: (
		node: NodeNameTypes,
		position: Position,
		fileName: string,
		data?: Record<string, unknown>,
	) => string;
	updateNodeData: (
		nodeId: string,
		data: Record<string, unknown>,
		fileName: string,
	) => void;
	updateEdgeType: (type: string, fileName: string) => void;
	deleteFile: (fileName: string) => void;
	addCase: (nodeId: string, fileName: string) => void;
	updateCase: (
		nodeId: string,
		fileName: string,
		caseId: string,
		newValue: string,
	) => void;
	updateSwitchVariable: (
		switchId: string,
		fileName: string,
		variable: string,
	) => void;
	removeCase: (switchId: string, fileName: string, caseId: string) => void;
	joinNodes: (nodeId1: string, nodeId2: string, filename: string) => void;
};

export const useNodes = create<Store>()(
	persist(
		(set, get) => ({
			filename: "",
			files: {},
			defaultEdgeType: "default",
			actions: {
				deleteFile: (fileName) => {
					set((state) => {
						const newFiles = { ...state.files };
						delete newFiles[fileName];
						return { files: newFiles };
					});
				},
				setNodes: (nodes, fileName) => {
					const files = get().files;
					const file = files[fileName] ?? {
						nodes: [],
						edges: [],
					};
					const newFile = { ...file, nodes };
					const newFiles = { ...files, [fileName]: newFile };
					set({ files: newFiles });
				},
				setEdges: (edges, fileName) => {
					const files = get().files;
					const file = files[fileName] ?? {
						nodes: [],
						edges: [],
					};
					const newFile = { ...file, edges };
					const newFiles = { ...files, [fileName]: newFile };
					set({ files: newFiles });
				},
				addNode: (node, position, fileName, data) => {
					const generatedId = crypto.randomUUID();
					const newNode = {
						id: generatedId,
						position,
						type: node,
						data: {},
					} as TypedNode;
					if (data !== undefined) {
						newNode.data = data;
					}
					if (data === undefined) {
						if (node === "wak") {
							newNode.data.key = "";
							newNode.data.value = "";
						}
						if (node === "file") {
							const files = Object.keys(get().files);
							newNode.data.text = files[0];
						}
						if (node === "code" || node === "text") {
							newNode.data.text = "";
						}
						if (node === "switch") {
							newNode.data.cases = [
								{
									id: crypto.randomUUID(),
									value: "",
								},
								{
									id: crypto.randomUUID(),
									value: "",
								},
							];
							newNode.data.variable = "wak050_scene";
						}
					}
					const files = get().files;
					const file = files[fileName] ?? {
						nodes: [],
						edges: [],
					};
					const newNodes = [...file.nodes, newNode];
					const newFile = { ...file, nodes: newNodes };
					const newFiles = { ...files };
					newFiles[fileName] = newFile;
					set({ files: newFiles });
					return generatedId;
				},
				updateNodeData: (nodeId, data, fileName) => {
					const files = get().files;
					const file = files[fileName] ?? {
						nodes: [],
						edges: [],
					};
					const nodes = file.nodes;
					const newNodes = nodes.map((node) => {
						if (node.id !== nodeId) return node;
						return { ...node, data: { ...node.data, ...data } };
					});
					const { setNodes } = get().actions;
					setNodes(newNodes, fileName);
				},
				addCase: (nodeId, fileName) => {
					const files = get().files;
					const file = files[fileName] ?? {
						nodes: [],
						edges: [],
					};
					const nodes = file.nodes;
					const newNodes = nodes.map((node) => {
						if (node.id !== nodeId) return node;
						const cases = node.data.cases ?? [];
						const newCase = {
							id: crypto.randomUUID(),
							value: "",
						};
						return {
							...node,
							data: {
								...node.data,
								cases: [...cases, newCase],
							},
						};
					});
					const { setNodes } = get().actions;
					setNodes(newNodes, fileName);
				},
				updateCase: (nodeId, fileName, caseId, newValue) => {
					const files = get().files;
					const file = files[fileName] ?? {
						nodes: [],
						edges: [],
					};
					const nodes = file.nodes;
					const newNodes = nodes.map((node) => {
						if (node.id !== nodeId) return node;
						const cases = node.data.cases;
						if (cases === undefined) return node;
						const newCases = cases.map((c) => {
							if (c.id !== caseId) return c;
							return { ...c, value: newValue };
						});
						return {
							...node,
							data: { ...node.data, cases: newCases },
						};
					});
					const { setNodes } = get().actions;
					setNodes(newNodes, fileName);
				},
				updateEdgeType: (type) => {
					const files = get().files;
					const newFiles = Object.fromEntries(
						Object.entries(files).map(([fileName, file]) => [
							fileName,
							file
								? {
										...file,
										edges: file.edges.map((edge) => ({ ...edge, type })),
									}
								: { nodes: [], edges: [] },
						]),
					);
					set({ files: newFiles, defaultEdgeType: type });
				},
				updateSwitchVariable: (switchId, fileName, variable) => {
					const files = get().files;
					const file = files[fileName] ?? {
						nodes: [],
						edges: [],
					};
					const nodes = file.nodes;
					const newNodes = nodes.map((node) => {
						if (node.id !== switchId) return node;
						const data = node.data;
						return { ...node, data: { ...data, variable } };
					});
					const { setNodes } = get().actions;
					setNodes(newNodes, fileName);
				},
				removeCase: (switchId, fileName, caseId) => {
					const files = get().files;
					const file = files[fileName] ?? {
						nodes: [],
						edges: [],
					};
					const nodes = file.nodes;
					const newNodes = nodes.map((node) => {
						if (node.id !== switchId) return node;
						const data = node.data;
						if (data.cases === undefined) return node;
						const newCases = data.cases.filter((c) => c.id !== caseId);
						const newData = { ...data, cases: newCases };
						return { ...node, data: newData };
					});
					const filteredEdges = file.edges.filter(
						(edge) => edge.sourceHandle !== caseId,
					);
					const { setNodes, setEdges } = get().actions;
					setNodes(newNodes, fileName);
					setEdges(filteredEdges, fileName);
				},
				joinNodes: (nodeId1, nodeId2, filename) => {
					const files = get().files;
					const file = files[filename];
					if (file === undefined) return;
					const edges = file.edges;
					const { setEdges } = get().actions;
					setEdges(
						[
							...edges,
							{
								id: crypto.randomUUID(),
								source: nodeId1,
								target: nodeId2,
							},
						],
						filename,
					);
				},
			},
		}),
		{
			name: "nodes-state",
			partialize: (state) =>
				Object.fromEntries(
					Object.entries(state).filter(([key]) => !["actions"].includes(key)),
				),
		},
	),
);
