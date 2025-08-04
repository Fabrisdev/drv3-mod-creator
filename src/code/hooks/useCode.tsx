import type { Node } from "@xyflow/react";
import { useNodes } from "@/nodes/store/store";

export function useCode() {
	const nodes = useNodes((state) => state.nodes);
	const edges = useNodes((state) => state.edges);
	const code = getCode();

	function getCode() {
		let currentNode = nodes.find((n) => n.type === "start");
		if (currentNode === undefined) return "";
		let output = "";
		while (currentNode !== undefined) {
			output += `${convertNodeToCode(currentNode)}\n`;
			const nextNode = findNextNode(currentNode);
			currentNode = nextNode;
		}
		return output;
	}

	function findNextNode(node: Node) {
		const nextEdge = edges.find((e) => e.source === node.id);
		if (nextEdge === undefined) return;
		return nodes.find((n) => n.id === nextEdge.target);
	}

	function convertNodeToCode(node: Node) {
		if (node.type === "start") return "<LAB lab_Top>";
		if (node.type === "text") return `<LOC ${node.data.text}>\n<BTN>`;
		if (node.type === "end") return "<END>";
	}

	return { code };
}
