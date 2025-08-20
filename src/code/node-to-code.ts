import type { Edge, Node } from "@xyflow/react";
import type { TypedNode } from "@/nodes/store/store";
import type { NodeNameTypes } from "@/nodes/types";
import { generateCodeFromNode } from "./node-helper";

type SimpleNodes = Exclude<NodeNameTypes, "switch">;

export function convertSimpleNodeToCode(node: Node) {
	const logic: Record<SimpleNodes, () => string> = {
		start: startNodeToCode,
		text: () => textNodeToCode(node),
		code: () => extractTextFromCodeNode(node),
		file: () => fileNodeToCode(node),
		end: () => "<END>",
		wak: () => "<WAK key = value>",
	};
	return logic[node.type as SimpleNodes]();
}

function fileNodeToCode(node: Node) {
	const text = typeof node.data.text === "string" ? node.data.text : "";
	return `<FIL ${text} lab_Top>`;
}

function extractTextFromCodeNode(node: Node) {
	const text = typeof node.data.text === "string" ? node.data.text : "";
	return text
		.split("\n")
		.map((line) => line.split("//")[0].trim())
		.filter((line) => line !== "")
		.join("\n");
}

function textNodeToCode(node: Node) {
	const text = typeof node.data.text === "string" ? node.data.text : "";
	const textWithNextLines = text.replaceAll("\n", "\\n");
	const character =
		typeof node.data.character === "string" ? node.data.character : "unset";
	if (character === "unset") return `<LOC ${textWithNextLines}>\n<BTN>`;
	return [`<CHN ${character}>`, `<LOC ${textWithNextLines}>`, "<BTN>"].join(
		"\n",
	);
}

function startNodeToCode() {
	return "<LAB lab_Top>";
}

export function generateSwitchCode(_node: Node, nodes: Node[], edges: Edge[]) {
	const node = _node as TypedNode;
	const output = [`<SWI ${node.data.variable}>`];
	if (node.data.cases === undefined) {
		output.push("<END>");
		return output.join("\n");
	}
	for (let i = 0; i < node.data.cases.length; i++) {
		const c = node.data.cases[i];
		output.push(`<CAS ${c.value}>`);
		const target = findNodeConnectedByHandle(c.id, nodes, edges);
		if (target) output.push(generateCodeFromNode(target.id, nodes, edges));
		output.push(`<END>`);
	}

	const defaultTarget = findNodeConnectedByHandle(
		`${node.id}-default`,
		nodes,
		edges,
	);
	output.push(`<CAS 65535>`);
	if (defaultTarget) {
		output.push(generateCodeFromNode(defaultTarget.id, nodes, edges));
	}
	output.push("<END>");
	return output.join("\n");
}

export function findNodeConnectedByHandle(
	handleId: string,
	nodes: Node[],
	edges: Edge[],
) {
	const edge = edges.find((e) => e.sourceHandle === handleId);
	if (edge === undefined) return;
	return nodes.find((n) => n.id === edge.target);
}
