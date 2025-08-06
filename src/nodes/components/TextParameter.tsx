import { useParams } from "next/navigation";
import { type PropsWithChildren, useId } from "react";
import { useData } from "../hooks/useData";
import { useNodes } from "../store/store";
import type { ParameterProps } from "../types";

export function TextParameter({
	id,
	children,
}: PropsWithChildren<ParameterProps>) {
	const { filename } = useParams();
	const inputId = useId();
	const { updateNodeData } = useNodes((store) => store.actions);
	const text = useData<string>({ id, prop: "text" });

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="text-center w-full">
				{children}
			</label>
			<textarea
				id={inputId}
				name="text"
				value={text}
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm p-2 min-w-full"
				placeholder="Text to display"
				onChange={(e) =>
					updateNodeData(id, { text: e.target.value }, filename as string)
				}
			/>
		</div>
	);
}
