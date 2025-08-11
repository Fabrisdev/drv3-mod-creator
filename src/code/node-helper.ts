import type { Edge, Node } from "@xyflow/react";
import { convertSimpleNodeToCode, generateSwitchCode } from "./node-to-code";

type NodesState = {
	nodes: Node[];
	edges: Edge[];
};

export function generateCode({ nodes, edges }: NodesState) {
	const startNode = nodes.find((n) => n.type === "start");
	if (startNode === undefined) return "";
	return generateCodeFromNode(startNode.id, nodes, edges);
}

export function findNextNode(nodeId: string, nodes: Node[], edges: Edge[]) {
	const nextEdge = edges.find((e) => e.source === nodeId);
	if (nextEdge === undefined) return;
	return nodes.find((n) => n.id === nextEdge.target);
}

export function generateCodeFromNode(
	nodeId: string,
	nodes: Node[],
	edges: Edge[],
): string {
	const node = nodes.find((n) => n.id === nodeId);
	if (!node) return "";
	if (node.type === "switch") return generateSwitchCode(node, nodes, edges);
	const code = convertSimpleNodeToCode(node);
	const next = findNextNode(node.id, nodes, edges);
	return `${code}${next ? `\n${generateCodeFromNode(next.id, nodes, edges)}` : ""}`;
}
