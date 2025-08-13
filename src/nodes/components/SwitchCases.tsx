import { useParams } from "next/navigation";
import { useData } from "../hooks/useData";
import { useNodes } from "../store/store";
import { SwitchCase } from "./SwitchCase";

type Props = {
	id: string;
};

export function SwitchCases({ id }: Props) {
	const cases = useData({ id, prop: "cases" }) ?? [];
	const { updateCase } = useNodes((state) => state.actions);
	const { filename } = useParams();
	return cases.map((c) => (
		<SwitchCase
			id={c.id}
			key={c.id}
			value={c.value}
			onChange={(newValue) =>
				updateCase(id, filename as string, c.id, newValue)
			}
		/>
	));
}
