import type { PropsWithChildren } from "react";
import { useCode } from "@/code/hooks/useCode";
import { PreviewRenderer } from "./PreviewRenderer";

type Props = {
	character: string;
	text: string;
};

export function TextPreview({ character, text }: PropsWithChildren<Props>) {
	const { code } = useCode();

	function extractPreviousCharacter() {
		const regex = /<CHN\s+([^>]+)>/g;

		const matches = [...code.matchAll(regex)];
		if (matches.length === 0) {
			return;
		} else {
			const lastChn = matches[matches.length - 1][1];
			return lastChn.slice(1, 4);
		}
	}

	const characterNameImage = (() => {
		console.log(character);

		if (character === "unset" || character === "") {
			const previousCharacter = extractPreviousCharacter();
			if (previousCharacter === undefined) return "";
			return `chara_name_${previousCharacter}_US`;
		}
		if (character === "chara_Blank") return "";
		if (character.startsWith("C"))
			return `chara_name_${character.slice(1, 4)}_US`;
		return "chara_name_999_US";
	})();

	return (
		<div className="flex flex-col items-center overflow-hidden">
			<p>Preview</p>
			<PreviewRenderer character={characterNameImage} text={text} />
		</div>
	);
}
