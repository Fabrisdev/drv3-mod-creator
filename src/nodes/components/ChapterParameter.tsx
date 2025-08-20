import { Select } from "@/ui/Select";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
};

export function ChapterParameter({ id }: Props) {
	const chapter = useData({ id, prop: "chapter" });
	const { update } = useUpdateData();
	return (
		<Select
			onChange={(chapter) => update({ id, data: { chapter } })}
			value={chapter}
		>
			<option value="Prologue">Prologue</option>
			<option value="Chapter1">Chapter 1</option>
			<option value="Chapter2">Chapter 2</option>
			<option value="Chapter3">Chapter 3</option>
			<option value="Chapter4">Chapter 4</option>
			<option value="Chapter5">Chapter 5</option>
			<option value="Chapter6">Chapter 6</option>
			<option value="Epilogue">Epilogue</option>
			<option value="Ainori">Ainori</option>
			<option value="Trial">Trial</option>
			<option value="Chapter">Chapter</option>
			<option value="Chapter10">Chapter 10</option>
			<option value="verification">Verification</option>
		</Select>
	);
}
