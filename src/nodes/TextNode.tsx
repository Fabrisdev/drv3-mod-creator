import { Handle, type NodeProps, Position } from "@xyflow/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { CharacterParameter } from "./components/CharacterParameter";
import { Node } from "./components/Node";
import {
	type TextMode,
	TextModeParameter,
} from "./components/TextModeParameter";
import {
	type OutputMode,
	TextOutputModeParameter,
} from "./components/TextOutputModeParameter";
import { TextParameter } from "./components/TextParameter";
import { useNodes } from "./store/store";

export function TextNode({ id, data }: NodeProps) {
	const { filename } = useParams();
	const [outputMode, setOutputMode] = useState<OutputMode>("colored");

	const { updateNodeData } = useNodes((state) => state.actions);

	function handleTextChange(newText: string) {
		updateNodeData(id, { text: newText }, filename as string);
	}

	function handleModeChange(mode: TextMode) {}

	return (
		<Node className=" flex flex-col gap-2">
			<CharacterParameter id={id} data={data} />
			<TextModeParameter handleChange={handleModeChange} />
			<TextOutputModeParameter
				mode={outputMode}
				handleChange={(m) => setOutputMode(m)}
			/>
			<TextParameter id={id} handleChange={handleTextChange} />

			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
