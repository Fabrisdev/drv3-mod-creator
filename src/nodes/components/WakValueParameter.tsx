import { Input } from "@/ui/Input";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
};

export function WakValueParameter({ id }: Props) {
	const value = useData({ id, prop: "value" });
	const { update } = useUpdateData();
	return (
		<Input
			placeholder="Value"
			value={value}
			onChange={(value) => update({ id, data: { value } })}
		/>
	);
}
