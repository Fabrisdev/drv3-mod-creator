import { Handle, Position } from "@xyflow/react";
import { Node } from "./components/Node";

export function FlgNode() {
	return (
		<Node>
			<p>Turn flag on/off</p>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
