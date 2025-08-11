import type { Node } from "@xyflow/react";
import type { NodeNameTypes } from "@/nodes/types";

export function convertNodeToCode(node: Node) {
	const logic: Record<NodeNameTypes, () => string> = {
		start: startNodeToCode,
		text: () => textNodeToCode(node),
		code: () => extractTextFromCodeNode(node),
		file: () => fileNodeToCode(node),
		end: () => "<END>",
		switch: () => switchNodeToCode(node),
	};
	return logic[node.type as NodeNameTypes]();
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

function switchNodeToCode(node: Node) {
	const value = typeof node.data.value === "string" ? node.data.value : "";

	return [`<SWI ${value}>`, "<END>"].join("\n");
}
