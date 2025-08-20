import { Handle, type NodeProps, Position } from "@xyflow/react";
import { ChapterParameter } from "./components/ChapterParameter";
import { Node } from "./components/Node";

export function SetChapterNode({ id }: NodeProps) {
	return (
		<Node>
			<p>Set chapter</p>
			<ChapterParameter id={id} />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
