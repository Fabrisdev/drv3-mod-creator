import { type PropsWithChildren, useId } from "react";
import Editor from "react-simple-code-editor";
import { escapeHtml } from "@/code/highlighter";

type Props = {
	text: string;
	handleChange: (newText: string) => void;
};

export function TextParameter({
	text,
	handleChange,
}: PropsWithChildren<Props>) {
	const inputId = useId();

	function highlight(text: string) {
		const html = escapeHtml(text);
		return html
			.replace(
				/&lt;CLT=cltMIND&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: #0080ff;">&ltCLT=cltMIND&gt$1</span>`,
			)
			.replace(
				/&lt;CLT=cltSTRONG&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: yellow;">&ltCLT=cltSTRONG&gt$1</span>`,
			)
			.replace(
				/&lt;CLT=cltSYSTEM&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: green;">&ltCLT=cltSYSTEM&gt$1</span>`,
			)
			.replace(
				/&lt;CLT=cltNORMAL&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: white;">&ltCLT=cltNORMAL&gt$1</span>`,
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
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm p-2 min-w-fit min-h-fit font-mono"
				placeholder="Text to display"
				onValueChange={(text) => handleChange(text)}
				highlight={highlight}
			/>
		</div>
	);
}
