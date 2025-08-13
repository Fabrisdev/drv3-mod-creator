import { Handle, Position } from "@xyflow/react";
import type { PropsWithChildren } from "react";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";

type Props = {
	id: string;
	value: string;
	onChange: (newValue: string) => void;
	onDelete: () => void;
};

export function SwitchCase({
	id,
	children,
	value,
	onChange,
	onDelete,
}: PropsWithChildren<Props>) {
	return (
		<div className="flex gap-2 items-center justify-between relative">
			<p>{children ? children : "Case"}</p>
			<Input placeholder="..." value={value} onChange={onChange} />
			<Button onClick={onDelete}>Remove</Button>
			<Handle
				type="source"
				position={Position.Right}
				id={id}
				style={{ right: "-8px " }}
			/>
		</div>
	);
}
