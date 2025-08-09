import { useParams } from "next/navigation";
import { useId } from "react";
import Editor from "react-simple-code-editor";
import { highlight } from "@/code/highlighter";
import { useNodes } from "../store/store";

type Props = {
	code: string;
	id: string;
};

export function CodeParameter({ id, code }: Props) {
	const inputId = useId();
	const { updateNodeData } = useNodes((store) => store.actions);
	const { filename } = useParams();

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="text-center w-full">
				Code
			</label>
			<Editor
				value={code}
				highlight={highlight}
				className="nodrag resize border-2 border-[#3c3c3c] rounded-sm min-w-50 min-h-30"
				onValueChange={(value) =>
					updateNodeData(id, { text: value }, filename as string)
				}
			/>
		</div>
	);
}
