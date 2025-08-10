import { Button } from "@/ui/Button";
import { Container } from "@/ui/Container";

export type TextMode = "normal" | "thinking" | "system" | "strong";

type Props = {
	handleChange: (mode: TextMode) => void;
};

export function TextModeParameter({ handleChange }: Props) {
	return (
		<div className="flex items-center justify-between">
			<p>Text mode</p>
			<Container className="flex gap-2">
				<Button onClick={() => handleChange("normal")}>Normal</Button>
				<Button onClick={() => handleChange("thinking")}>Thinking</Button>
				<Button onClick={() => handleChange("strong")}>Strong</Button>
				<Button onClick={() => handleChange("system")}>System</Button>
			</Container>
		</div>
	);
}
