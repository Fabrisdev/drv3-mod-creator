import { Handle, type NodeProps, Position } from "@xyflow/react";
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

export function TextNode({ id, data }: NodeProps) {
	const [textMode, setTextMode] = useState<TextMode>("normal");
	const [outputMode, setOutputMode] = useState<OutputMode>("colored");
	return (
		<Node>
			<div className="flex flex-col gap-2">
				<CharacterParameter id={id} data={data} />
				<TextModeParameter
					mode={textMode}
					handleChange={(m) => setTextMode(m)}
				/>
				<TextOutputModeParameter
					mode={outputMode}
					handleChange={(m) => setOutputMode(m)}
				/>
				<TextParameter id={id} />
			</div>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
