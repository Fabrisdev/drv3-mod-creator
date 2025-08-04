import { useNodes } from "@/nodes/store/store";
import { NodeOption } from "./NodeOption";

export function StartNodeOption() {
	const nodes = useNodes((state) => state.nodes);
	const alreadyHasStartNode = nodes.some((node) => node.type === "start");
	return (
		<NodeOption type="start" disabled={alreadyHasStartNode}>
			Add Start node
		</NodeOption>
	);
}
