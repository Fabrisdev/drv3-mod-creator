export type TextMode = "normal" | "thinking";

type Props = {
	mode: TextMode;
	handleChange: (mode: TextMode) => void;
};

export function TextModeParameter({ mode, handleChange }: Props) {
	return (
		<div className="flex items-center justify-between">
			<p>Text mode</p>
			<div className="bg-[#3c3c3c] rounded-sm flex gap-2 w-fit p-1">
				<label className="flex gap-1">
					<input
						type="radio"
						checked={mode === "normal"}
						onChange={() => handleChange("normal")}
					/>
					Normal
				</label>
				<label className="flex gap-1">
					<input
						type="radio"
						checked={mode === "thinking"}
						onChange={() => handleChange("thinking")}
					/>
					<p>Thinking</p>
				</label>
			</div>
		</div>
	);
}
