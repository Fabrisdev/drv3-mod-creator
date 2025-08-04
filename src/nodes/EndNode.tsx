import { Handle, Position } from "@xyflow/react";
import { Node } from "./components/Node";

export function EndNode() {
	return (
		<Node>
			<p>End</p>
			<Handle type="target" position={Position.Left} />
		</Node>
	);
}
