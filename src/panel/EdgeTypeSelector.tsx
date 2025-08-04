import { useId } from "react";
import { useNodes } from "@/nodes/store/store";

export function EdgeTypeSelector() {
	const { updateEdgeType } = useNodes((state) => state.actions);
	const defaultEdgeType = useNodes((state) => state.defaultEdgeType);
	const selectId = useId();

	return (
		<div className="flex items-center gap-2">
			<label htmlFor={selectId}>Edge type</label>
			<select
				value={defaultEdgeType}
				id={selectId}
				className="bg-gray-600 p-2 rounded-sm cursor-pointer"
				onChange={(e) => updateEdgeType(e.target.value)}
			>
				<option value="bezier">Bezier (default)</option>
				<option value="step">Step</option>
				<option value="smoothstep">Smooth step</option>
				<option value="straight">Straight</option>
			</select>
		</div>
	);
}
