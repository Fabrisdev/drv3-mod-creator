import { useReactFlow } from "@xyflow/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { nodeNames } from "@/nodes/node-names";
import { useNodes } from "@/nodes/store/store";
import type { NodeNameTypes } from "@/nodes/types";
import { Button } from "@/ui/Button";
import { Container } from "@/ui/Container";
import { ContainerTitle } from "@/ui/ContainerTitle";
import { Select } from "@/ui/Select";

type Props = {
	closeMenu: () => void;
};

export function SpawnOption({ closeMenu }: Props) {
	const { addNode } = useNodes((state) => state.actions);
	const [nodeSelected, setNodeSelected] = useState<NodeNameTypes>("text");
	const { filename } = useParams();
	const { screenToFlowPosition } = useReactFlow();

	const nodeOptions = Object.entries(nodeNames)
		.filter(([type, _]) => type !== "start")
		.map(([type, name]) => (
			<option key={type} value={type}>
				{name}
			</option>
		));

	return (
		<Container>
			<ContainerTitle>Spawn node...</ContainerTitle>
			<div className="flex gap-2">
				<Select
					onChange={(selected) => setNodeSelected(selected as NodeNameTypes)}
					value={nodeSelected}
				>
					{nodeOptions}
				</Select>
				<Button
					onClick={(e) => {
						addNode(
							nodeSelected,
							screenToFlowPosition({
								x: e.clientX,
								y: e.clientY,
							}),
							filename as string,
						);
						closeMenu();
					}}
				>
					Spawn
				</Button>
			</div>
		</Container>
	);
}
