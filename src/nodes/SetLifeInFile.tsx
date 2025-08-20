import { Handle, Position } from "@xyflow/react";
import { LifeInFileParameter } from "./components/LifeInFileParameter";
import { Node } from "./components/Node";

export function SetLifeInFile() {
	return (
		<Node>
			<p>Type of life in file</p>
			<LifeInFileParameter />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
