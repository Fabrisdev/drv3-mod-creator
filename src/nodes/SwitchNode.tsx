import { Handle, type NodeProps, Position } from "@xyflow/react";
import { Button } from "@/ui/Button";
import { Select } from "@/ui/Select";
import { Node } from "./components/Node";
import { SwitchCase } from "./components/SwitchCase";
import { useData } from "./hooks/useData";

export function SwitchNode({ id }: NodeProps) {
	const cases = useData({ id, prop: "cases" }) ?? [
		{ id: `${id}-0`, value: "" },
		{ id: `${id}-1`, value: "" },
	];

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
				<SwitchCase
					id={c.id}
					key={c.id}
					value={c.value}
					onChange={(newValue) => {}}
				/>
			))}
			<div className="relative">
				<p>Default</p>
				<Handle
					type="source"
					position={Position.Right}
					id={`${id}-default`}
					style={{ right: "-8px " }}
				/>
			</div>
			<Button onClick={() => {}}>Add case</Button>
			<Handle type="target" position={Position.Left} />
		</Node>
	);
}
