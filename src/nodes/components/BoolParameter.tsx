import { Container } from "@/ui/Container";
import { Select } from "@/ui/Select";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
};

export function BoolParameter({ id }: Props) {
	const bool = useData({ id, prop: "bool" });
	const { update } = useUpdateData();
	return (
		<Container className="flex gap-2 items-center">
			<p>State</p>
			<Select value={bool} onChange={(bool) => update({ id, data: { bool } })}>
				<option value="off">Alive</option>
				<option value="on">Dead</option>
			</Select>
		</Container>
	);
}
