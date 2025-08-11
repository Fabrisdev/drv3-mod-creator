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
		cases: Case[] | undefined;
		text: string | undefined;
		character: string | undefined;
	};
}

type Actions = {
	setNodes: (nodes: TypedNode[], fileName: string) => void;
	setEdges: (edges: Edge[], fileName: string) => void;
	addNode: (node: NodeNameTypes, position: Position, fileName: string) => void;
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
				addNode: (node, position, fileName) => {
					const newNode = {
						id: crypto.randomUUID(),
						position,
						type: node,
						data: {},
					} as TypedNode;
					if (node === "code" || node === "text") {
						newNode.data.text = "";
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
						const cases = node.data.cases;
						if (cases === undefined)
							return {
								...node,
								data: {
									...node.data,
									cases: [
										{
											id: `${nodeId}-0`,
											value: "",
										},
									],
								},
							};
						return {
							...node,
							data: {
								...node.data,
								cases: [
									...cases,
									{
										id: `${nodeId}-${cases.length}`,
										value: "",
									},
								],
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
