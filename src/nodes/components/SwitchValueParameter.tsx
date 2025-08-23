import { useFilename } from "@/file-manager/hooks/useFilename";
import { Select } from "@/ui/Select";
import { useData } from "../hooks/useData";
import { createFileStore } from "../store/file";

type Props = {
	id: string;
};

export function SwitchValueParameter({ id }: Props) {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	const { updateSwitchVariable } = useFileStore((state) => state.actions);
	const variable = useData({ id, prop: "variable" }) ?? "wak050_scene";
	return (
		<div className="flex gap-2 items-center">
			<p>Value</p>
			<Select
				onChange={(newVariable) => updateSwitchVariable(id, newVariable)}
				value={variable}
			>
				<option value="wak050_scene">wak050_scene</option>
				<option value="wak051_detail">wak051_detail</option>
			</Select>
		</div>
	);
}
