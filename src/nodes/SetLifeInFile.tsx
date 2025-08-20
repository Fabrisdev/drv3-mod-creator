import { Handle, type NodeProps, Position } from "@xyflow/react";
import { LifeInFileParameter } from "./components/LifeInFileParameter";
import { Node } from "./components/Node";

export function SetLifeInFile({ id }: NodeProps) {
	return (
		<Node>
			<p>Type of life in file</p>
			<LifeInFileParameter id={id} />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
