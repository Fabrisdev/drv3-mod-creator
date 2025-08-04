import type { Edge, Node } from "@xyflow/react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { NodeNameTypes } from "../types";

type Store = {
	nodes: Node[];
	edges: Edge[];
	defaultEdgeType: string;
	actions: Actions;
};

type Actions = {
	setNodes: (nodes: Node[]) => void;
	setEdges: (edges: Edge[]) => void;
	addNode: (node: NodeNameTypes, position: Position) => void;
	updateNodeData: (nodeId: string, data: Record<string, unknown>) => void;
	updateEdgeType: (type: string) => void;
};

type Position = {
	x: number;
	y: number;
};

export const useNodes = create<Store>()(
	persist(
		(set, get) => ({
			nodes: [],
			edges: [],
			defaultEdgeType: "bezier",
			actions: {
				setNodes: (nodes) => set({ nodes }),
				setEdges: (edges) => set({ edges }),
				addNode: (node, position) => {
					const newNode: Node = {
						id: crypto.randomUUID(),
						position,
						type: node,
						data: {},
					};

					set((state) => ({
						nodes: [...state.nodes, newNode],
					}));
				},
				updateNodeData: (nodeId, data) => {
					const nodes = get().nodes;
					const newNodes = nodes.map((node) => {
						if (node.id !== nodeId) return node;
						return { ...node, data: { ...node.data, ...data } };
					});
					set({ nodes: newNodes });
				},
				updateEdgeType: (type) => {
					const edges = get().edges;
					const newEdges = edges.map((edge) => ({ ...edge, type }));
					set({ edges: newEdges, defaultEdgeType: type });
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
