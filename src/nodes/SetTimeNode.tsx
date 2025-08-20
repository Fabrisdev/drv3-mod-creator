import { Handle, type NodeProps, Position } from "@xyflow/react";
import { Node } from "./components/Node";
import { TimeParameter } from "./components/TimeParameter";

export function SetTimeNode({ id }: NodeProps) {
	return (
		<Node>
			<p>Time of day</p>
			<TimeParameter id={id} />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
