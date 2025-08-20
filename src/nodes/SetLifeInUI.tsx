import { Handle, type NodeProps, Position } from "@xyflow/react";
import { LifeInUIParameter } from "./components/LifeInUIParameter";
import { Node } from "./components/Node";

export function SetLifeInUI({ id }: NodeProps) {
	return (
		<Node>
			<p>Type of life in UI</p>
			<LifeInUIParameter id={id} />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
