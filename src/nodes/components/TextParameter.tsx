import { useId } from "react";
import { useNodes } from "../store/store";
import type { ParameterProps } from "../types";

export function TextParameter({ id, data }: ParameterProps) {
	const inputId = useId();
	const { updateNodeData } = useNodes((store) => store.actions);
	const text = typeof data.text === "string" ? data.text : "";

	return (
		<>
			<label htmlFor={inputId} className="text-center">
				Text
			</label>
			<textarea
				id={inputId}
				name="text"
				value={text}
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm p-2 min-w-full"
				placeholder="Text to display"
				onChange={(e) => updateNodeData(id, { text: e.target.value })}
			/>
		</>
	);
}
