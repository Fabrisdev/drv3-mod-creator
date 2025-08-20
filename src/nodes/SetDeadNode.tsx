import { Handle, type NodeProps, Position } from "@xyflow/react";
import { DeadCharacterParameter } from "./components/DeadCharacterParameter";
import { DeadParameter } from "./components/DeadParameter";
import { Node } from "./components/Node";

export function SetDeadNode({ id }: NodeProps) {
	return (
		<Node>
			<p>Set dead</p>
			<div className="flex gap-2">
				<DeadCharacterParameter id={id} />
				<DeadParameter id={id} />
			</div>

			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
