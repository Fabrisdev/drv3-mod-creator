import type { Edge, Node } from "@xyflow/react";
import { convertNodeToCode } from "./node-to-code";

type NodesState = {
	nodes: Node[];
	edges: Edge[];
};

export function generateCode({ nodes, edges }: NodesState) {
	let currentNode = nodes.find((n) => n.type === "start");
	if (currentNode === undefined) return "";
	let output = "";
	while (currentNode !== undefined) {
		const code = convertNodeToCode(currentNode);
		if (code.trim() !== "") output += `${code}\n`;
		const nextNode = findNextNode(currentNode.id, nodes, edges);
		currentNode = nextNode;
	}
	return output;
}

function findNextNode(nodeId: string, nodes: Node[], edges: Edge[]) {
	const nextEdge = edges.find((e) => e.source === nodeId);
	if (nextEdge === undefined) return;
	return nodes.find((n) => n.id === nextEdge.target);
}
