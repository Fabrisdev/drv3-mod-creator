import type { NodeProps } from "@xyflow/react";
import { Node } from "./components/Node";
import { TextParameter } from "./components/TextParameter";

export function FileNode({ id, data }: NodeProps) {
	return (
		<Node>
			<p>File</p>
			<TextParameter id={id} data={data} placeholder="File to switch to" />
		</Node>
	);
}
