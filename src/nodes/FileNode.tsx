import { Handle, type NodeProps, Position } from "@xyflow/react";
import { FileParameter } from "./components/FileParameter";
import { Node } from "./components/Node";

export function FileNode({ id, data }: NodeProps) {
	return (
		<Node>
			<p>Switch to file</p>
			<FileParameter id={id} data={data} hideCurrentFile />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
