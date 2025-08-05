import { Handle, type NodeProps, Position } from "@xyflow/react";
import { Node } from "./components/Node";
import { TextParameter } from "./components/TextParameter";

export function CodeNode({ id, data }: NodeProps) {
	return (
		<Node>
			<TextParameter id={id} data={data}>
				Code
			</TextParameter>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
