import { useShallow } from "zustand/shallow";
import { useFilename } from "@/file-manager/hooks/useFilename";
import { useData } from "../hooks/useData";
import { useNodes } from "../store/file";
import type { ParameterProps } from "../types";

type Props = {
	hideCurrentFile?: boolean;
} & ParameterProps;

export function FileParameter({ id, hideCurrentFile }: Props) {
	const { filename } = useFilename();
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
