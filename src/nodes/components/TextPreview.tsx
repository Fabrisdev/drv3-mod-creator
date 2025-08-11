import type { PropsWithChildren } from "react";
import { PreviewRenderer } from "./PreviewRenderer";

type Props = {
	character: string;
	text: string;
	previousCharacter: string | undefined;
};

export function TextPreview({
	character,
	text,
	previousCharacter,
}: PropsWithChildren<Props>) {
	const characterNameImage = (() => {
		if (character === "unset" || character === "") {
			if (previousCharacter === "har") return "chara_name_999_US";
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
