"use client";

import {
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	Background,
	type Connection,
	Controls,
	type EdgeChange,
	MiniMap,
	type NodeChange,
	ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { CodePanel } from "@/code/CodePanel";
import { CodeNode } from "@/nodes/CodeNode";
import { EndNode } from "@/nodes/EndNode";
import { StartNode } from "@/nodes/StartNode";
import { useNodes } from "@/nodes/store/store";
import { TextNode } from "@/nodes/TextNode";
import type { NodeTypes } from "@/nodes/types";
import { NodesPanel } from "@/panel/NodesPanel";

export default function Home() {
	const nodes = useNodes((state) => state.nodes);
	const edges = useNodes((state) => state.edges);
	const defaultEdgeType = useNodes((state) => state.defaultEdgeType);
	const { setEdges, setNodes } = useNodes((state) => state.actions);
	const nodeTypes: NodeTypes = {
		text: TextNode,
		start: StartNode,
		end: EndNode,
		code: CodeNode,
	};

	function onNodesChange(changes: NodeChange[]) {
		setNodes(applyNodeChanges(changes, nodes));
	}

	function onEdgesChange(changes: EdgeChange[]) {
		setEdges(applyEdgeChanges(changes, edges));
	}

	function onConnect(params: Connection) {
		setEdges(addEdge(params, edges));
	}

	return (
		<div className="h-svh">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				deleteKeyCode={["Backspace", "Delete"]}
				colorMode="dark"
				proOptions={{
					hideAttribution: true,
				}}
				defaultEdgeOptions={{ type: defaultEdgeType }}
			>
				<Background />
				<Controls />
				<MiniMap />
				<NodesPanel />
				<CodePanel />
			</ReactFlow>
		</div>
	);
}
