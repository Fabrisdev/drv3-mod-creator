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
import { StartNode } from "@/nodes/StartNode";
import { createFileStore } from "@/nodes/store/file";
import type { TypedNode } from "@/nodes/store/types";
import { TextNode } from "@/nodes/TextNode";
import type { NodeTypes } from "@/nodes/types";
import { NodesPanel } from "@/panel/NodesPanel";
import "@xyflow/react/dist/style.css";
import type { Node } from "@xyflow/react";
import { ContextMenu } from "@/context-menu/ContextMenu";
import { OpenFilePicker } from "@/file-manager/components/OpenFilePicker";
import { useFilename } from "@/file-manager/hooks/useFilename";
import { FileNode } from "@/nodes/FileNode";
import { FlgNode } from "@/nodes/FlgNode";
import { SetChapterNode } from "@/nodes/SetChapterNode";
import { SetDeadNode } from "@/nodes/SetDeadNode";
import { SetLifeInFile } from "@/nodes/SetLifeInFile";
import { SetLifeInUI } from "@/nodes/SetLifeInUI";
import { SetTimeNode } from "@/nodes/SetTimeNode";
import { SwitchNode } from "@/nodes/SwitchNode";
import { useFilesStore } from "@/nodes/store/files";
import { WakNode } from "@/nodes/WakNode";

export default function Home() {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	const { setEdges, setNodes } = useFileStore((state) => state.actions);
	const nodes = useFileStore((state) => state.nodes);
	const edges = useFileStore((state) => state.edges);
	const edgeType = useFilesStore((state) => state.edgeType);

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
		set_dead: SetDeadNode,
		life_in_file: SetLifeInFile,
		life_in_ui: SetLifeInUI,
		flg: FlgNode,
	};

	function onNodesChange(changes: NodeChange[]) {
		setNodes(applyNodeChanges(changes, nodes) as TypedNode[]);
	}

	function onEdgesChange(changes: EdgeChange[]) {
		setEdges(applyEdgeChanges(changes, edges));
	}

	function onConnect(params: Connection) {
		setEdges(addEdge(params, edges));
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
						defaultEdgeOptions={{ type: edgeType }}
						isValidConnection={isValidConnection}
					>
						<Background />
						<Controls />
						<MiniMap pannable zoomable />
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
