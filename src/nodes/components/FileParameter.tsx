import { useFilename } from "@/file-manager/hooks/useFilename";
import { useData } from "../hooks/useData";
import { createFileStore } from "../store/file";
import { useFilesStore } from "../store/files";
import type { ParameterProps } from "../types";

type Props = {
	hideCurrentFile?: boolean;
} & ParameterProps;

export function FileParameter({ id, hideCurrentFile }: Props) {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	const { updateNodeData } = useFileStore((store) => store.actions);
	const files = useFilesStore((state) => state.filenames);
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
			onChange={(e) => updateNodeData(id, { text: e.target.value })}
		>
			{filesMapped}
		</select>
	);
}
