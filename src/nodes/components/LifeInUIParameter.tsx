import { Select } from "@/ui/Select";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
};
export function LifeInUIParameter({ id }: Props) {
	const text = useData({ id, prop: "text" });
	const { update } = useUpdateData();
	return (
		<Select value={text} onChange={(text) => update({ id, data: { text } })}>
			<option value="Everyday">Daily Life</option>
			<option value="Extraordinary">Deadly Life</option>
		</Select>
	);
}
