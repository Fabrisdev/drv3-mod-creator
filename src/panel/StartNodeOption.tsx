import { useFilename } from "@/file-manager/hooks/useFilename";
import { createFileStore } from "@/nodes/store/file";
import { NodeOption } from "./NodeOption";

export function StartNodeOption() {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	const nodes = useFileStore((state) => state.nodes);
	const alreadyHasStartNode = nodes?.some((node) => node.type === "start");
	return (
		<NodeOption type="start" disabled={alreadyHasStartNode}>
			Add Start node
		</NodeOption>
	);
}
