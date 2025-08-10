export type OutputMode = "colored" | "raw";

type Props = {
	mode: OutputMode;
	handleChange: (mode: OutputMode) => void;
};

export function TextOutputModeParameter({ mode, handleChange }: Props) {
	return (
		<div className="flex items-center justify-between">
			<p>Output mode</p>
			<div className="bg-[#3c3c3c] rounded-sm flex gap-2 w-fit p-1">
				<label className="flex gap-1">
					<input
						type="radio"
						checked={mode === "colored"}
						onChange={() => handleChange("colored")}
					/>
					Colored
				</label>
				<label className="flex gap-1">
					<input
						type="radio"
						checked={mode === "raw"}
						onChange={() => handleChange("raw")}
					/>
					<p>Raw</p>
				</label>
			</div>
		</div>
	);
}
