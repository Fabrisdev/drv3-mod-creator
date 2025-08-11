import { Handle, Position } from "@xyflow/react";
import { useState } from "react";
import { Button } from "@/ui/Button";
import { Select } from "@/ui/Select";
import { Node } from "./components/Node";
import { SwitchCase } from "./components/SwitchCase";

export function SwitchNode() {
	const [cases, setCases] = useState(["a", "b"]);
	return (
		<Node className="flex flex-col gap-1 p-4">
			<p className="text-center">Switch</p>
			<div className="flex gap-2 items-center">
				<p>Value</p>
				<Select>
					<option value="wak050_scene">wak050_scene</option>
					<option value="wak051_detail">wak051_detail</option>
				</Select>
			</div>
			<p className="text-center">Cases</p>
			{cases.map((c) => (
				<SwitchCase id={c} key={c} />
			))}
			<SwitchCase id="c">Default</SwitchCase>
			<Button onClick={() => setCases([...cases, crypto.randomUUID()])}>
				Add case
			</Button>
			<Handle type="target" position={Position.Left} />
		</Node>
	);
}
