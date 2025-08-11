import { Handle, Position } from "@xyflow/react";
import type { PropsWithChildren } from "react";
import { Input } from "@/ui/Input";

type Props = {
	id: string;
};

export function SwitchCase({ id, children }: PropsWithChildren<Props>) {
	return (
		<div className="flex gap-2 items-center justify-between relative">
			<p>{children ? children : "Case"}</p>
			<Input placeholder="..." />
			<Handle
				type="source"
				position={Position.Right}
				id={id}
				style={{ right: "-8px " }}
			/>
		</div>
	);
}
