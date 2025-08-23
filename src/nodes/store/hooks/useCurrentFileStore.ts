import { useFilename } from "@/file-manager/hooks/useFilename";
import { createFileStore } from "../file";

export function useCurrentFileStore() {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	return useFileStore;
}
