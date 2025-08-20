import { Container } from "@/ui/Container";
import { Input } from "@/ui/Input";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
};
export function FlgParameter({ id }: Props) {
	const text = useData({ id, prop: "text" }) ?? "";
	const { update } = useUpdateData();
	return (
		<Container className="flex gap-2 items-center">
			<p>Flag</p>
			<Input
				placeholder="Flag"
				value={text}
				onChange={(text) => update({ id, data: { text } })}
			/>
		</Container>
	);
}
