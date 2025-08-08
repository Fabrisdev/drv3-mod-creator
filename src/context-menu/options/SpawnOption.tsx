import { nodeNames } from "@/nodes/node-names";
import { Button } from "@/ui/Button";
import { Container } from "@/ui/Container";
import { ContainerTitle } from "@/ui/ContainerTitle";
import { Select } from "@/ui/Select";

type Props = {
	closeMenu: () => void;
};

export function SpawnOption({ closeMenu }: Props) {
	const nodeOptions = Object.entries(nodeNames).map(([type, name]) => (
		<option key={type}>{name}</option>
	));
	return (
		<Container>
			<ContainerTitle>Spawn node...</ContainerTitle>
			<div className="flex gap-2">
				<Select>{nodeOptions}</Select>
				<Button
					onClick={() => {
						closeMenu();
					}}
				>
					Spawn
				</Button>
			</div>
		</Container>
	);
}
