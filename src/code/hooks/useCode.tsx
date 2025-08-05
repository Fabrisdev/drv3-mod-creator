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
			const code = convertNodeToCode(currentNode);
			if (code.trim() !== "") output += `${code}\n`;
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
		if (node.type === "start") return startNodeToCode();
		if (node.type === "text") return textNodeToCode(node);
		if (node.type === "code") return extractTextFromCodeNode(node);
		if (node.type === "end") return "<END>";
		return "";
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
		return [
			"<LAB lab_Top>",
			"<WAK wkChapter = Prologue>",
			"<WAK wkDayTimes = TimeNon>",
			"<WAK wkEveryday = Everyday>",
			"<WAK wakTrialWindow = WindowAkamatu>",
			"<WAK wkMode = wkModeTansaku>",
			"<FDS fadeInStop fdColBlack Speed060>",
			"<FLG on flgTexWindow>",
		].join("\n");
	}

	return { code };
}
