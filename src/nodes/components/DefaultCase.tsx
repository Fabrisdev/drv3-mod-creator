import { Handle, Position } from "@xyflow/react";

type Props = {
	id: string;
};

export function DefaultCase({ id }: Props) {
	return (
		<div className="relative">
			<p>Default</p>
			<Handle
				type="source"
				position={Position.Right}
				id={`${id}-default`}
				style={{ right: "-8px " }}
			/>
		</div>
	);
}
