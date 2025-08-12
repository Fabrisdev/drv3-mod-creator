import { Handle, type NodeProps, Position } from "@xyflow/react";
import { AddCaseButton } from "./components/AddCaseButton";
import { DefaultCase } from "./components/DefaultCase";
import { Node } from "./components/Node";
import { SwitchCases } from "./components/SwitchCases";
import { SwitchValueParameter } from "./components/SwitchValueParameter";

export function SwitchNode({ id }: NodeProps) {
	return (
		<Node className="flex flex-col gap-1 p-4">
			<p className="text-center">Switch</p>
			<SwitchValueParameter id={id} />
			<p className="text-center">Cases</p>
			<SwitchCases id={id} />
			<DefaultCase id={id} />
			<AddCaseButton id={id} />
			<Handle type="target" position={Position.Left} />
		</Node>
	);
}
