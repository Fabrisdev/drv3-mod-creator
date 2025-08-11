import { Handle, Position } from "@xyflow/react";
import { Node } from "./components/Node";

export function SwitchNode() {
	return (
		<Node>
			<p>Switch</p>
			<select>
				<option value="wak050_scene">wak050_scene</option>
				<option value="wak051_detail">wak051_detail</option>
			</select>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
