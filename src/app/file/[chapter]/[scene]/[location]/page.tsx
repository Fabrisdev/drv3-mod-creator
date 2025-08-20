"use client";

import {
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	Background,
	type Connection,
	Controls,
	type Edge,
	type EdgeChange,
	getOutgoers,
	MiniMap,
	type NodeChange,
	ReactFlow,
	ReactFlowProvider,
} from "@xyflow/react";
import { CodePanel } from "@/code/CodePanel";
import { CurrentFilePanel } from "@/file-manager/panels/CurrentFilePanel";
import { CodeNode } from "@/nodes/CodeNode";
import { EndNode } from "@/nodes/EndNode";
import { useQueryEdges } from "@/nodes/hooks/useQueryEdges";
import { useQueryNodes } from "@/nodes/hooks/useQueryNodes";
import { StartNode } from "@/nodes/StartNode";
import { type TypedNode, useNodes } from "@/nodes/store/store";
import { TextNode } from "@/nodes/TextNode";
import type { NodeTypes } from "@/nodes/types";
import { NodesPanel } from "@/panel/NodesPanel";
import "@xyflow/react/dist/style.css";
import type { Node } from "@xyflow/react";
import { ContextMenu } from "@/context-menu/ContextMenu";
import { OpenFilePicker } from "@/file-manager/components/OpenFilePicker";
import { useFilename } from "@/file-manager/hooks/useFilename";
import { FileNode } from "@/nodes/FileNode";
import { SetChapterNode } from "@/nodes/SetChapterNode";
import { SetTimeNode } from "@/nodes/SetTimeNode";
import { SwitchNode } from "@/nodes/SwitchNode";
import { WakNode } from "@/nodes/WakNode";

export default function Home() {
	const { filename } = useFilename();
	const { setEdges, setNodes } = useNodes((state) => state.actions);

	const defaultEdgeType = useNodes((state) => state.defaultEdgeType);

	const nodes = useQueryNodes();
	const edges = useQueryEdges();

	const nodeTypes: NodeTypes = {
		text: TextNode,
		start: StartNode,
		end: EndNode,
		code: CodeNode,
		file: FileNode,
		switch: SwitchNode,
		wak: WakNode,
		set_time: SetTimeNode,
		set_chapter: SetChapterNode,
	};

	function onNodesChange(changes: NodeChange[]) {
		setNodes(applyNodeChanges(changes, nodes) as TypedNode[], filename);
	}

	function onEdgesChange(changes: EdgeChange[]) {
		setEdges(applyEdgeChanges(changes, edges), filename);
	}

	function onConnect(params: Connection) {
		setEdges(addEdge(params, edges), filename);
	}

	function isValidConnection(connection: Edge | Connection) {
		const target = nodes.find((node) => node.id === connection.target);
		if (target === undefined) return true;
		const hasCycle = (node: Node, visited = new Set()) => {
			if (visited.has(node.id)) return false;

			visited.add(node.id);

			for (const outgoer of getOutgoers(node, nodes, edges)) {
				if (outgoer.id === connection.source) return true;
				if (hasCycle(outgoer, visited)) return true;
			}
		};

		if (target.id === connection.source) return false;
		return !hasCycle(target);
	}

	return (
		<ReactFlowProvider>
			<ContextMenu>
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
						isValidConnection={isValidConnection}
					>
						<Background />
						<Controls />
						<MiniMap />
						<NodesPanel />
						<CodePanel />
						<CurrentFilePanel />
					</ReactFlow>
					<OpenFilePicker />
				</div>
			</ContextMenu>
		</ReactFlowProvider>
	);
}
