import { useParams } from "next/navigation";
import { Select } from "@/ui/Select";
import { useData } from "../hooks/useData";
import { useNodes } from "../store/store";

type Props = {
	id: string;
};

export function SwitchValueParameter({ id }: Props) {
	const { filename } = useParams();
	const { updateSwitchVariable } = useNodes((state) => state.actions);
	const variable = useData({ id, prop: "variable" }) ?? "wak050_scene";
	return (
		<div className="flex gap-2 items-center">
			<p>Value</p>
			<Select
				onChange={(newVariable) =>
					updateSwitchVariable(id, filename as string, newVariable)
				}
				value={variable}
			>
				<option value="wak050_scene">wak050_scene</option>
				<option value="wak051_detail">wak051_detail</option>
			</Select>
		</div>
	);
}
