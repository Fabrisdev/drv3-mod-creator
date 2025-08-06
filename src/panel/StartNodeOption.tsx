import { useParams } from "next/navigation";
import { useNodes } from "@/nodes/store/store";
import { NodeOption } from "./NodeOption";

export function StartNodeOption() {
	const { filename } = useParams();
	const nodes = useNodes((state) => state.files[filename as string]?.nodes);
	const alreadyHasStartNode = nodes?.some((node) => node.type === "start");
	return (
		<NodeOption type="start" disabled={alreadyHasStartNode}>
			Add Start node
		</NodeOption>
	);
}
