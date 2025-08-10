import { Button } from "@/ui/Button";

export type TextMode = "normal" | "thinking" | "system" | "strong";

type Props = {
	handleChange: (mode: TextMode) => void;
};

export function TextModeParameter({ handleChange }: Props) {
	return (
		<div className="flex items-center justify-between">
			<p>Text mode</p>
			<div className="bg-[#3c3c3c] rounded-sm flex gap-2 w-fit p-1">
				<Button onClick={() => handleChange("normal")}>Normal</Button>
				<Button onClick={() => handleChange("thinking")}>Thinking</Button>
				<Button onClick={() => handleChange("strong")}>Strong</Button>
				<Button onClick={() => handleChange("system")}>System</Button>
			</div>
		</div>
	);
}
