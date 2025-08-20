import { Select } from "@/ui/Select";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
};

export function TimeParameter({ id }: Props) {
	const time = useData({ id, prop: "time" });
	const { update } = useUpdateData();
	return (
		<Select value={time} onChange={(time) => update({ id, data: { time } })}>
			<option value="DayTime">Day</option>
			<option value="Night">Night</option>
			<option value="TimeNon">Unknown</option>
		</Select>
	);
}
