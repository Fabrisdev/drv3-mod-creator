import { useFilename } from "@/file-manager/hooks/useFilename";
import { createFileStore } from "@/nodes/store/file";
import { generateCode } from "../node-helper";

export function useCode() {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	const nodes = useFileStore((state) => state.nodes);
	const edges = useFileStore((state) => state.edges);
	const code = generateCode({ nodes, edges });

	return { code };
}
