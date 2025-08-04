import { Handle, Position } from "@xyflow/react";
import { Node } from "./components/Node";

export function StartNode() {
	return (
		<Node>
			<p>Start</p>
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
