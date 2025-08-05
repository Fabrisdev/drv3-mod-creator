import { Handle, type NodeProps, Position } from "@xyflow/react";
import { CharacterParameter } from "./components/CharacterParameter";
import { Node } from "./components/Node";
import { TextParameter } from "./components/TextParameter";

export function TextNode({ id, data }: NodeProps) {
	return (
		<Node>
			<div className="flex flex-col gap-2">
				<CharacterParameter id={id} data={data} />
				<TextParameter id={id} data={data} />
			</div>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
