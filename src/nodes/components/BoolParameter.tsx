import { Container } from "@/ui/Container";
import { Select } from "@/ui/Select";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
	translation?: {
		off: string;
		on: string;
	};
};

export function BoolParameter({ id, translation }: Props) {
	const bool = useData({ id, prop: "bool" });
	const { update } = useUpdateData();
	return (
		<Container className="flex gap-2 items-center">
			<p>State</p>
			<Select value={bool} onChange={(bool) => update({ id, data: { bool } })}>
				<option value="off">{translation ? translation.off : "Off"}</option>
				<option value="on">{translation ? translation.on : "On"}</option>
			</Select>
		</Container>
	);
}
