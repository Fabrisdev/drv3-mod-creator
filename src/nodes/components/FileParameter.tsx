import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useData } from "../hooks/useData";
import { useNodes } from "../store/store";
import type { ParameterProps } from "../types";

type Props = {
	hideCurrentFile?: boolean;
} & ParameterProps;

export function FileParameter({ id, hideCurrentFile }: Props) {
	const { filename } = useParams();
	const { updateNodeData } = useNodes((store) => store.actions);
	const files = useNodes(useShallow((state) => Object.keys(state.files)));
	const filteredFiles = hideCurrentFile
		? files.filter((file) => file !== filename)
		: files;
	const text = useData({ id, prop: "text" });
	const filesMapped = filteredFiles.map((file) => (
		<option value={file} key={file}>
			{file}
		</option>
	));

	useEffect(() => {
		if (text !== undefined) return;
		updateNodeData(id, { text: filteredFiles[0] }, filename as string);
	}, [text, filteredFiles]);

	return (
		<select
			value={text}
			className="nodrag resize border-2 border-[#3c3c3c] min-w-full bg-[#3c3c3c] p-1 rounded-sm"
			onChange={(e) =>
				updateNodeData(id, { text: e.target.value }, filename as string)
			}
		>
			{filesMapped}
		</select>
	);
}
