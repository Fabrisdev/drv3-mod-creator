import { Handle, type NodeProps, Position } from "@xyflow/react";
import { FileParameter } from "./components/FileParameter";
import { Node } from "./components/Node";

export function FileNode({ id, data }: NodeProps) {
	return (
		<Node>
			<p>File</p>
			<FileParameter id={id} data={data} />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
