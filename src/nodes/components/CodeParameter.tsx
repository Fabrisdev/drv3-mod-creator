import { useId } from "react";
import Editor from "react-simple-code-editor";
import { useData } from "../hooks/useData";
import { useNodes } from "../store/store";
import type { ParameterProps } from "../types";

export function CodeParameter({ id }: ParameterProps) {
	const inputId = useId();
	const { updateNodeData } = useNodes((store) => store.actions);
	const text = useData({ id, prop: "text" });

	function highlight(text: string) {
		const code = text
			.split("\n")
			.map((line) => {
				const lineSplitted = line.split("//");
				if (lineSplitted.length === 1) return escapeHtml(line);
				const lineOnlyWithComments = lineSplitted.slice(1).join("//");
				return `${escapeHtml(lineSplitted[0])}<span style="color: green">${escapeHtml(`//${lineOnlyWithComments}`)}</span>`;
			})
			.join("<br>");
		return code;
	}

	function escapeHtml(text: string): string {
		return text
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/ /g, "&nbsp;")
			.replace(/\n/g, "<br>");
	}

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="text-center w-full">
				Code
			</label>
			<Editor
				value={text}
				highlight={highlight}
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm p-2 min-w-full"
				onValueChange={(value) => updateNodeData(id, { text: value })}
			/>
		</div>
	);
}
