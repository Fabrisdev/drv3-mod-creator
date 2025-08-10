import { useParams } from "next/navigation";
import { type PropsWithChildren, useId } from "react";
import { useData } from "../hooks/useData";
import { useNodes } from "../store/store";

type Props = {
	id: string;
	handleChange: (newText: string) => void;
};

export function TextParameter({ id, handleChange }: PropsWithChildren<Props>) {
	const inputId = useId();
	const text = useData({ id, prop: "text" });

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="text-center w-full">
				Text
			</label>
			<textarea
				id={inputId}
				name="text"
				value={text}
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm p-2 min-w-full"
				placeholder="Text to display"
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
}
