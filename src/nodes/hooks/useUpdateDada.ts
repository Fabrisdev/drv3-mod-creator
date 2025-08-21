import { useFilename } from "@/file-manager/hooks/useFilename";
import { createFileStore } from "../store/file";

type Update = {
	id: string;
	data: Record<string, unknown>;
};

export function useUpdateData() {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	const { updateNodeData } = useFileStore((state) => state.actions);

	function update({ id, data }: Update) {
		updateNodeData(id, data);
	}

	return { update };
}
