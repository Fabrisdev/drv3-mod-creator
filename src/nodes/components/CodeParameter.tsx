import { useParams } from "next/navigation";
import { useId } from "react";
import Editor from "react-simple-code-editor";
import { highlight } from "@/code/highlighter";
import { useData } from "../hooks/useData";
import { useNodes } from "../store/store";
import type { ParameterProps } from "../types";

export function CodeParameter({ id }: ParameterProps) {
	const inputId = useId();
	const { updateNodeData } = useNodes((store) => store.actions);
	const text = useData({ id, prop: "text" }) ?? "";
	const { filename } = useParams();

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="text-center w-full">
				Code
			</label>
			<Editor
				value={text}
				highlight={highlight}
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm min-w-50 min-h-30"
				onValueChange={(value) =>
					updateNodeData(id, { text: value }, filename as string)
				}
			/>
		</div>
	);
}
