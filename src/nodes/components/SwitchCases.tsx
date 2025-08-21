import { useFilename } from "@/file-manager/hooks/useFilename";
import { useData } from "../hooks/useData";
import { createFileStore } from "../store/file";
import { SwitchCase } from "./SwitchCase";

type Props = {
	id: string;
};

export function SwitchCases({ id }: Props) {
	const cases = useData({ id, prop: "cases" }) ?? [];
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);

	const { updateCase, removeCase } = useFileStore((state) => state.actions);
	return cases.map((c) => (
		<SwitchCase
			id={c.id}
			key={c.id}
			value={c.value}
			onChange={(newValue) => updateCase(id, c.id, newValue)}
			onDelete={() => removeCase(id, c.id)}
		/>
	));
}
