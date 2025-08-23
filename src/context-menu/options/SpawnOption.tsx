import { useReactFlow } from "@xyflow/react";
import { useState } from "react";
import { nodeNames } from "@/nodes/node-names";
import { useCurrentFileStore } from "@/nodes/store/hooks/useCurrentFileStore";
import type { NodeNameTypes } from "@/nodes/types";
import { Button } from "@/ui/Button";
import { Container } from "@/ui/Container";
import { ContainerTitle } from "@/ui/ContainerTitle";
import { Select } from "@/ui/Select";

type Props = {
	closeMenu: () => void;
};

export function SpawnOption({ closeMenu }: Props) {
	const [nodeSelected, setNodeSelected] = useState<NodeNameTypes>("text");
	const useFileStore = useCurrentFileStore();
	const { addNode } = useFileStore((state) => state.actions);
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
