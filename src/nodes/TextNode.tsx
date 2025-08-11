import { Handle, type NodeProps, Position } from "@xyflow/react";
import { useParams } from "next/navigation";
import { useRef } from "react";
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

	return (
		<Node className=" flex flex-col gap-2">
			<CharacterParameter id={id} data={data} />
			<TextModeParameter handleChange={handleModeChange} />
			<TextParameter
				text={text}
				handleChange={handleTextChange}
				onSelect={onSelect}
			/>
			<TextPreview character={character} text={text} />

			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
