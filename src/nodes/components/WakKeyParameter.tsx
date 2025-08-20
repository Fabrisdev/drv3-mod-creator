import { Input } from "@/ui/Input";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
};

export function WakKeyParameter({ id }: Props) {
	const key = useData({ id, prop: "key" }) ?? "";
	const { update } = useUpdateData();

	return (
		<Input
			placeholder="Key"
			value={key}
			onChange={(key) => update({ id, data: { key } })}
		/>
	);
}
