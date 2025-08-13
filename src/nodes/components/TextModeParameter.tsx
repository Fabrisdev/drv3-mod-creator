import { Button } from "@/ui/Button";
import { Icon32x } from "@/ui/Icon32x";

export type Buttons = "cross" | "circle" | "triangle" | "square";
export type TextMode =
	| "normal"
	| "thinking"
	| "system"
	| "strong"
	| `${Buttons}-button`;

type Props = {
	handleChange: (mode: TextMode) => void;
};

export function TextModeParameter({ handleChange }: Props) {
	return (
		<div className="flex items-center justify-between">
			<p>Add special symbol</p>
			<div className="flex gap-1">
				<Button onClick={() => handleChange("normal")}>Normal</Button>
				<Button onClick={() => handleChange("thinking")}>Thinking</Button>
				<Button onClick={() => handleChange("strong")}>Strong</Button>
				<Button onClick={() => handleChange("system")}>System</Button>
				<div className="bg-[#3c3c3c] w-[2px] ml-2 mr-2"></div>
				<Button onClick={() => handleChange("square-button")}>
					<Icon32x
						src="/special-symbols/003_sys_square.png"
						alt="Square button"
					/>
				</Button>
				<Button onClick={() => handleChange("circle-button")}>
					<Icon32x
						src="/special-symbols/002_sys_circle.png"
						alt="Circle button"
					/>
				</Button>
				<Button onClick={() => handleChange("triangle-button")}>
					<Icon32x
						src="/special-symbols/004_sys_triangle.png"
						alt="Triangle button"
					/>
				</Button>
				<Button onClick={() => handleChange("cross-button")}>
					<Icon32x
						src="/special-symbols/005_sys_cross.png"
						alt="Cross button"
					/>
				</Button>
			</div>
		</div>
	);
}
