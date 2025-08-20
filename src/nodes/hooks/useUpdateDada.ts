import { useFilename } from "@/file-manager/hooks/useFilename";
import { useNodes } from "../store/store";

type Update = {
	id: string;
	data: Record<string, unknown>;
};

export function useUpdateData() {
	const { updateNodeData } = useNodes((state) => state.actions);
	const { filename } = useFilename();

	function update({ id, data }: Update) {
		updateNodeData(id, data, filename);
	}

	return { update };
}
