import { useId } from "react";
import { useFilename } from "@/file-manager/hooks/useFilename";
import { useNodes } from "@/nodes/store/file";

export function EdgeTypeSelector() {
	const { updateEdgeType } = useNodes((state) => state.actions);
	const defaultEdgeType = useNodes((state) => state.defaultEdgeType);
	const selectId = useId();
	const { filename } = useFilename();

	return (
		<div className="flex items-center gap-2">
			<label htmlFor={selectId}>Edge type</label>
			<select
				value={defaultEdgeType}
				id={selectId}
				className="bg-gray-600 p-2 rounded-sm cursor-pointer"
				onChange={(e) => updateEdgeType(e.target.value, filename as string)}
			>
				<option value="default">Bezier (default)</option>
				<option value="step">Step</option>
				<option value="smoothstep">Smooth step</option>
				<option value="straight">Straight</option>
			</select>
		</div>
	);
}
