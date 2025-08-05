import { Handle, type NodeProps, Position } from "@xyflow/react";
import { CodeParameter } from "./components/CodeParameter";
import { Node } from "./components/Node";

export function CodeNode({ id, data }: NodeProps) {
	return (
		<Node>
			<CodeParameter id={id} data={data} />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
