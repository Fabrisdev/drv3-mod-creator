import localFont from "next/font/local";
import Image from "next/image";
import Editor from "react-simple-code-editor";
import { escapeHtml } from "@/code/highlighter";

const font = localFont({
	src: "./Textbox.woff2",
});

type Props = {
	character: string;
	text: string;
};

export function PreviewRenderer({ character, text }: Props) {
	function highlight(text: string) {
		const html = escapeHtml(text);
		return html
			.replace(
				/&lt;CLT=cltMIND&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: #0080ff;">$1</span>`,
			)
			.replace(
				/&lt;CLT=cltSTRONG&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: yellow;">$1</span>`,
			)
			.replace(
				/&lt;CLT=cltSYSTEM&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: green;">$1</span>`,
			)
			.replace(
				/&lt;CLT=cltNORMAL&gt;([\s\S]*?)(?=&lt;CLT=|$)/g,
				`<span style="color: white;">$1</span>`,
			);
	}

	return (
		<div className="h-[160px]">
			<div className="relative h-[120px] w-[960px] top-2 left-9">
				<Image
					src="/text-box/bases/chara_hi.png"
					alt="Textbox"
					width={960}
					height={103}
					className="absolute bottom-0"
				/>
				<Image
					src="/text-box/characters/bases/day.png"
					alt="Character name's base"
					width={256}
					height={30}
					className="absolute top-0 left-[10px]"
				/>
				<Image
					src={`/text-box/characters/names/${character}.png`}
					alt="Character name text"
					width={228}
					height={33}
					className="absolute top-[-5px] left-[28px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="Right bar"
					width={64}
					height={136}
					className="absolute top-[18px] left-[830px]"
				/>
				<Image
					src="/text-box/effects/day_eff.png"
					alt="Right bar's effect"
					width={45}
					height={58}
					className="absolute top-[18px] left-[808px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="Left bar"
					width={64}
					height={136}
					className="absolute top-[-16px] left-[2px]"
				/>
				<Image
					src="/text-box/effects/day_eff.png"
					alt="Left bar's effect"
					width={45}
					height={58}
					className="absolute top-[62px] left-[43px] rotate-180"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="First small left bar"
					width={32}
					height={68}
					className="absolute top-[-16px] left-[-8px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="Second small left bar"
					width={32}
					height={68}
					className="absolute top-[-16px] left-[-18px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="First extra small left bar"
					width={16}
					height={34}
					className="absolute top-[-16px] left-[-24px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="Second extra small left bar"
					width={16}
					height={34}
					className="absolute top-[-16px] left-[-30px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="First small right bar"
					width={32}
					height={68}
					className="absolute top-[50px] left-[859px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="First small right bar"
					width={32}
					height={68}
					className="absolute top-[50px] left-[869px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="First extra small right bar"
					width={16}
					height={34}
					className="absolute top-[84px] left-[892px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="First extra small right bar"
					width={16}
					height={34}
					className="absolute top-[84px] left-[898px]"
				/>
				<Image
					src="/text-box/effects/day_bar.png"
					alt="Top small left bar"
					width={32}
					height={68}
					className="absolute top-[-25px] left-[-2px]"
				/>

				<div className="absolute top-[36px] left-[169px]">
					<Editor
						value={text}
						className={font.className}
						style={{ fontSize: "21px" }}
						placeholder="Text to display"
						onValueChange={() => {}}
						highlight={highlight}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
