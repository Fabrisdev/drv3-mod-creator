import type { Ref } from "react";
import type { Position } from "@/nodes/types";
import { Container } from "@/ui/Container";
import { SpawnOption } from "../options/SpawnOption";

type Props = {
	position: Position | null;
	ref: Ref<HTMLDivElement> | null;
	closeMenu: () => void;
};

export function Menu({ position, ref, closeMenu }: Props) {
	return (
		<Container
			className="fixed min-w-80"
			ref={ref}
			style={{
				top: position?.y,
				left: position?.x,
			}}
		>
			<p>Options</p>
			<SpawnOption closeMenu={closeMenu} />
		</Container>
	);
}
