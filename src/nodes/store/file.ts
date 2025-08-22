import type { Edge } from "@xyflow/react";
import { create, type StoreApi, type UseBoundStore } from "zustand";
import { persist } from "zustand/middleware";
import type { TypedNode } from "@/nodes/store/types";
import type { NodeNameTypes, Position } from "../types";

type Store = {
	nodes: TypedNode[];
	edges: Edge[];
	actions: Actions;
};

type Actions = {
	setNodes: (nodes: TypedNode[]) => void;
	setEdges: (edges: Edge[]) => void;
	addNode: (
		node: NodeNameTypes,
		position: Position,
		data?: Record<string, unknown>,
	) => string;
	updateNodeData: (nodeId: string, data: Record<string, unknown>) => void;
	addCase: (nodeId: string) => void;
	updateCase: (nodeId: string, caseId: string, newValue: string) => void;
	updateSwitchVariable: (switchId: string, variable: string) => void;
	removeCase: (switchId: string, caseId: string) => void;
	joinNodes: (nodeId1: string, nodeId2: string) => void;
};

const stores: Record<string, UseBoundStore<StoreApi<Store>>> = {};

export function createFileStore(filename: string) {
	if (stores[filename] === undefined) {
		stores[filename] = create<Store>()(
			persist(
				(set, get) => ({
					nodes: [],
					edges: [],
					actions: {
						setNodes: (nodes) => {
							set({ nodes });
						},
						setEdges: (edges) => {
							set({ edges });
						},
						addNode: (node, position, data) => {
							const id = crypto.randomUUID();
							const newNode = createNode({
								type: node,
								position,
								data,
								id,
							});
							const newNodes = [...get().nodes, newNode];
							set({ nodes: newNodes });
							return id;
						},
						updateNodeData: (nodeId, data) => {
							const newNodes = get().nodes.map((node) => {
								if (node.id !== nodeId) return node;
								return { ...node, data: { ...node.data, ...data } };
							});
							set({ nodes: newNodes });
						},
						addCase: (nodeId) => {
							const newNodes = get().nodes.map((node) => {
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
							set({ nodes: newNodes });
						},
						updateCase: (nodeId, caseId, newValue) => {
							const newNodes = get().nodes.map((node) => {
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
							set({ nodes: newNodes });
						},
						updateSwitchVariable: (switchId, variable) => {
							const newNodes = get().nodes.map((node) => {
								if (node.id !== switchId) return node;
								const data = node.data;
								return { ...node, data: { ...data, variable } };
							});
							set({ nodes: newNodes });
						},
						removeCase: (switchId, caseId) => {
							const newNodes = get().nodes.map((node) => {
								if (node.id !== switchId) return node;
								const data = node.data;
								if (data.cases === undefined) return node;
								const newCases = data.cases.filter((c) => c.id !== caseId);
								const newData = { ...data, cases: newCases };
								return { ...node, data: newData };
							});
							const filteredEdges = get().edges.filter(
								(edge) => edge.sourceHandle !== caseId,
							);
							set({ nodes: newNodes, edges: filteredEdges });
						},
						joinNodes: (nodeId1, nodeId2) => {
							const newEdges = [
								...get().edges,
								{
									id: crypto.randomUUID(),
									source: nodeId1,
									target: nodeId2,
								},
							];
							set({ edges: newEdges });
						},
					},
				}),
				{
					name: filename,
					partialize: (state) =>
						Object.fromEntries(
							Object.entries(state).filter(
								([key]) => !["actions"].includes(key),
							),
						),
				},
			),
		);
	}

	return stores[filename];
}

type CreateNode = {
	type: NodeNameTypes;
	position: Position;
	data?: Record<string, unknown>;
	id: string;
};

function createNode({ type, position, data, id }: CreateNode) {
	const newNode: TypedNode = {
		id,
		position,
		type,
		data: {},
	};
	if (data !== undefined) {
		newNode.data = data;
		return newNode;
	}
	if (type === "flg") {
		newNode.data.text = "";
		newNode.data.bool = "off";
	}
	if (type === "life_in_ui") {
		newNode.data.text = "Everyday";
	}
	if (type === "life_in_file") {
		newNode.data.text = "tansaku_daily";
	}
	if (type === "set_dead") {
		newNode.data.character = "flgDeath_C013_Yonag";
		newNode.data.bool = "off";
	}
	if (type === "set_chapter") {
		newNode.data.chapter = "Prologue";
	}
	if (type === "set_time") {
		newNode.data.time = "DayTime";
	}
	if (type === "wak") {
		newNode.data.key = "";
		newNode.data.value = "";
	}
	if (type === "file") {
		newNode.data.text = "TODO: Get first file";
	}
	if (type === "code" || type === "text") {
		newNode.data.text = "";
	}
	if (type === "switch") {
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
	return newNode;
}
