import { Handle, type NodeProps, Position } from "@xyflow/react";
import { useId } from "react";
import { Node } from "./components/Node";
import { useNodes } from "./store/store";

export function TextNode({ id, data }: NodeProps) {
	const inputId = useId();
	const characterSelectId = useId();
	const { updateNodeData } = useNodes((store) => store.actions);
	const text = typeof data.text === "string" ? data.text : "";
	const character =
		typeof data.character === "string" ? data.character : "unset";

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		updateNodeData(id, {
			text: event.target.value,
		});
	}

	return (
		<Node>
			<div className="flex flex-col gap-2">
				<div className="flex gap-2 items-center">
					<label htmlFor={characterSelectId}>Character</label>
					<select
						value={character}
						id={characterSelectId}
						className="bg-[#3c3c3c] w-full p-1 rounded-sm"
						onChange={(e) =>
							updateNodeData(id, {
								character: e.target.value,
							})
						}
					>
						<option value="unset">Same as before</option>
						<option value="C018_blank">Blank</option>
						<option value="chara_Hatena">"???"</option>
						<option value="C013_Yonag">Angie Yonaga</option>
						<option value="C004_Gokuh">Gonta Gokuhara</option>
						<option value="C009_Yumen">Himiko Yumeno</option>
						<option value="C007_Ki-Bo">K1-B0</option>
						<option value="C015_Akama">Kaede Akamatsu</option>
						<option value="C001_Momot">Kaito Momota</option>
						<option value="C008_Tojo_">Kirumi Tojo</option>
						<option value="C005_Oma__">Kokichi Oma</option>
						<option value="C006_Shing">Korekiyo Shinguji</option>
						<option value="C010_Haruk">Maki Harukawa</option>
						<option value="C014_Iruma">Miu Iruma</option>
						<option value="C024_Mdam_">Monodam</option>
						<option value="C025_Mkid_">Monokid</option>
						<option value="C020_Monok">Monokuma</option>
						<option value="C023_Mfunn">Monophanie</option>
						<option value="C022_Msuke">Monosuke</option>
						<option value="C021_Mtaro">Monotaro</option>
						<option value="C034_Mmono">Motherkuma</option>
						<option value="C003_Amami">Rantaro Amami</option>
						<option value="C002_Hoshi">Ryoma Hoshi</option>
						<option value="C000_Saiha">Shuichi Saihara</option>
						<option value="C011_Chaba">Tenko Chabashira</option>
						<option value="C012_Shiro">Tsumugi Shirogane</option>
					</select>
				</div>
				<label htmlFor={inputId} className="text-center">
					Text
				</label>
				<textarea
					id={inputId}
					name="text"
					value={text}
					className="nodrag resize border-2 border-[#3c3c3c] rounded-sm p-2"
					placeholder="Text to display"
					onChange={handleChange}
				/>
			</div>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
