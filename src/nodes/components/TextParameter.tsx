import { type PropsWithChildren, useId } from "react";
import Editor from "react-simple-code-editor";
import { escapeHtml } from "@/code/highlighter";

type Props = {
	text: string;
	showRawText: boolean;
	handleChange: (newText: string) => void;
};

export function TextParameter({
	text,
	handleChange,
	showRawText,
}: PropsWithChildren<Props>) {
	const inputId = useId();

	function highlight(text: string) {
		const html = escapeHtml(text);
		if (showRawText) return html;
		return html
			.replace(
				/&lt;CLT=cltMIND&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: #0080ff;">$1</span>`,
			)
			.replace(
				/&lt;CLT=cltSTRONG&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="font-weight: bold; color: yellow;">$1</span>`,
			)
			.replace(
				/&lt;CLT=cltSYSTEM&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: green;">$1</span>`,
			)
			.replace(
				/&lt;CLT=cltNORMAL&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: white;">$1</span>`,
			);
	}

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="text-center w-full">
				Text
			</label>
			<Editor
				id={inputId}
				name="text"
				value={text}
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm p-2 min-w-fit min-h-fit"
				placeholder="Text to display"
				onValueChange={(text) => handleChange(text)}
				highlight={highlight}
			/>
		</div>
	);
}
