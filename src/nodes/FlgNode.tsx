import { Handle, type NodeProps, Position } from "@xyflow/react";
import { BoolParameter } from "./components/BoolParameter";
import { FlgParameter } from "./components/FlgParameter";
import { Node } from "./components/Node";

export function FlgNode({ id }: NodeProps) {
	return (
		<Node>
			<p>Turn flag on/off</p>
			<div className="flex gap-2">
				<FlgParameter id={id} />
				<BoolParameter id={id} />
			</div>

			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
