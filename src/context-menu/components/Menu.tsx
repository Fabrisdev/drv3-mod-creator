import { Node } from "@/nodes/components/Node";
import type { Position } from "@/nodes/types";

type Props = {
	position: Position | null;
};

export function Menu({ position }: Props) {
	return (
		<Node
			className="fixed"
			style={{
				top: position?.y,
				left: position?.x,
			}}
		>
			<p>Options</p>
			<button type="button">Spawn</button>
		</Node>
	);
}
