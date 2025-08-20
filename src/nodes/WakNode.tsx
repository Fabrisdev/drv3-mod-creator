import { Handle, type NodeProps, Position } from "@xyflow/react";
import { Node } from "./components/Node";
import { WakKeyParameter } from "./components/WakKeyParameter";
import { WakValueParameter } from "./components/WakValueParameter";

export function WakNode({ id }: NodeProps) {
	return (
		<Node className="flex flex-col gap-2">
			<div className="flex items-center gap-1">
				<p>WAK</p>
				<small className="opacity-50">(Configure game engine parameters)</small>
			</div>

			<div className="flex gap-2">
				<WakKeyParameter id={id} />
				<WakValueParameter id={id} />
			</div>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
