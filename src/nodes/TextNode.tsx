import { Handle, type NodeProps, Position } from "@xyflow/react";
import { useId } from "react";
import { Node } from "./components/Node";
import { useNodes } from "./store/store";

export function TextNode({ id, data }: NodeProps) {
	const inputId = useId();
	const { updateNodeData } = useNodes((store) => store.actions);
	const text = typeof data.text === "string" ? data.text : "";

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		updateNodeData(id, {
			text: event.target.value,
		});
	}

	return (
		<Node>
			<div className="flex flex-col">
				<label htmlFor={inputId} className="text-center">
					Text
				</label>
				<textarea
					id={inputId}
					name="text"
					value={text}
					className="nodrag resize"
					placeholder="Text to display"
					onChange={handleChange}
				/>
			</div>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
