import { useParams } from "next/navigation";
import Editor from "react-simple-code-editor";
import { highlight } from "@/code/highlighter";
import { useNodes } from "@/nodes/store/store";

type Props =
	| {
			code: string;
			disabled?: false;
			id: string;
	  }
	| {
			code: string;
			disabled: true;
			id?: never;
	  };

export function CodeEditor({ code, disabled, id }: Props) {
	const { filename } = useParams();
	const { updateNodeData } = useNodes((state) => state.actions);
	const lines = code
		.split("\n")
		.map((_, index) => index + 1)
		.join("\n");

	function handleChange(value: string) {
		if (disabled) return;
		updateNodeData(id ?? "", { text: value }, filename as string);
	}

	return (
		<div className="flex">
			<pre className="text-[#6e7681] text-right pr-2">{lines}</pre>
			<Editor
				value={code}
				highlight={highlight}
				disabled={disabled}
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm min-w-fit min-h-fit w-80 h-50 font-mono"
				onValueChange={(value) => handleChange(value)}
			/>
		</div>
	);
}
