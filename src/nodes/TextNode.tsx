import { Handle, type NodeProps, Position } from "@xyflow/react";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { extractPreviousCharacter } from "@/code/chara-helper";
import { useCode } from "@/code/hooks/useCode";
import { CharacterParameter } from "./components/CharacterParameter";
import { Node } from "./components/Node";
import {
	type TextMode,
	TextModeParameter,
} from "./components/TextModeParameter";
import { TextParameter } from "./components/TextParameter";
import { TextPreview } from "./components/TextPreview";
import { useData } from "./hooks/useData";
import { useNodes } from "./store/store";

export function TextNode({ id, data }: NodeProps) {
	const { filename } = useParams();
	const text = useData({ id, prop: "text" }) ?? "";
	const character = useData({ id, prop: "character" }) ?? "";
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const { code } = useCode();

	const { updateNodeData } = useNodes((state) => state.actions);

	function handleTextChange(newText: string) {
		updateNodeData(id, { text: newText }, filename as string);
	}

	function handleModeChange(mode: TextMode) {
		const modes: Record<TextMode, string> = {
			normal: "<CLT=cltNORMAL>",
			thinking: "<CLT=cltMIND>",
			strong: "<CLT=cltSTRONG>",
			system: "<CLT=cltSYSTEM>",
			"circle-button": "<PAD=【○】>",
			"cross-button": "<PAD=【×】>",
			"triangle-button": "<PAD=【△】>",
			"square-button": "<PAD=【□】>",
		};
		const textToAdd = modes[mode];
		const selectionStart = textareaRef.current?.selectionStart ?? 0;
		const selectionEnd = textareaRef.current?.selectionEnd ?? 0;
		const before = text.slice(0, selectionStart);
		const after = text.slice(selectionEnd);
		const newText = `${before}${textToAdd}${after}`;
		textareaRef.current?.setRangeText(
			textToAdd,
			selectionStart,
			selectionEnd,
			"end",
		);
		textareaRef.current?.focus();
		updateNodeData(id, { text: newText }, filename as string);
	}

	function onSelect(event: React.SyntheticEvent<HTMLDivElement, Event>) {
		const target = event.target as HTMLTextAreaElement;
		if (target === undefined) return;
		textareaRef.current = target;
	}

	const previousCharacter = extractPreviousCharacter(code);
	const warning = (() => {
		if (previousCharacter === undefined && ["", "unset"].includes(character))
			return "⚠️ No previous speaking character found. If you have set this in another file you can ignore this message";
		const lines = text.split("\n");
		if (lines.some((line) => line.length > 39))
			return "⚠️ Lines are too long. Text may get squished when rendering in-game";
		if (lines.length > 2)
			return "⚠️ More than 2 new lines used. Text might render outside textbox. Consider adding another Text node instead";
		return "";
	})();

	return (
		<Node className={`flex flex-col gap-2 ${warning && "border-yellow-500"}`}>
			{warning && <p>{warning}</p>}
			<CharacterParameter id={id} data={data} />
			<TextModeParameter handleChange={handleModeChange} />
			<TextParameter
				text={text}
				handleChange={handleTextChange}
				onSelect={onSelect}
			/>
			<TextPreview
				character={character}
				text={text}
				previousCharacter={previousCharacter}
			/>

			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
