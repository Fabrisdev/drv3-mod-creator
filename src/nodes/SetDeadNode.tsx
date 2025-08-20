import { Handle, type NodeProps, Position } from "@xyflow/react";
import { BoolParameter } from "./components/BoolParameter";
import { DeadCharacterParameter } from "./components/DeadCharacterParameter";
import { Node } from "./components/Node";

export function SetDeadNode({ id }: NodeProps) {
	return (
		<Node>
			<p>Set dead</p>
			<div className="flex gap-2">
				<DeadCharacterParameter id={id} />
				<BoolParameter id={id} />
			</div>

			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
