import type { Ref } from "react";
import type { Position } from "@/nodes/types";
import { Button } from "@/ui/Button";
import { Container } from "@/ui/Container";

type Props = {
	position: Position | null;
	ref: Ref<HTMLDivElement> | null;
};

export function Menu({ position, ref }: Props) {
	return (
		<Container
			className="fixed"
			ref={ref}
			style={{
				top: position?.y,
				left: position?.x,
			}}
		>
			<p>Options</p>
			<Button onClick={() => {}}>Spawn</Button>
		</Container>
	);
}
