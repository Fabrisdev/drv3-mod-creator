import type { PropsWithChildren } from "react";
import { PreviewRenderer } from "./PreviewRenderer";

type Props = {
	character: string;
	text: string;
};

export function TextPreview({ character, text }: PropsWithChildren<Props>) {
	const characterNameImage = (() => {
		console.log(character);
		if (character.startsWith("C"))
			return `chara_name_${character.slice(1, 4)}_US`;
		return "chara_name_999_US";
	})();

	return (
		<div className="flex flex-col items-center">
			<p>Preview</p>
			<PreviewRenderer character={characterNameImage} text={text} />
		</div>
	);
}
