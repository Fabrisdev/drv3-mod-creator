import { useShallow } from "zustand/shallow";
import { useNodes } from "@/nodes/store/store";
import { findNextFile, sceneCode } from "../scenes";
import { useConnect } from "./useConnect";

type Create = {
	chapter: string;
	scene: string;
};

export function useSceneHelper() {
	const connect = useConnect();
	const filenames = useNodes(useShallow((state) => Object.keys(state.files)));

	function create({ chapter, scene }: Create) {
		const filename = `c${chapter}/${scene}/000`;
		const nextFile = findNextFile(filename, filenames);
		const nodes = connect(filename).start();
		let plainCode = [];
		for (const line of sceneCode) {
			if (typeof line === "string") {
				plainCode.push(line);
				continue;
			}
			if (plainCode.length > 0) {
				nodes.code(plainCode.join("\n"));
				plainCode = [];
			}
			if (line.type === "wak") {
				const { key, value } = line;
				nodes.wak({ key, value: key === "wak050_scene" ? scene : value });
			}
			if (line.type === "time") {
				const { time } = line;
				nodes.time(time);
			}
			if (line.type === "chapter") {
				const { chapter } = line;
				nodes.chapter(chapter);
			}
			if (line.type === "dead") {
				const { character, bool } = line;
				nodes.dead({ character, bool });
			}
			if (line.type === "set_life_in_file") {
				const { text } = line;
				nodes.lifeInFile(text);
			}
			if (line.type === "set_life_in_ui") {
				const { text } = line;
				nodes.lifeInUI(text);
			}
		}
		if (plainCode.length > 0) nodes.code(plainCode.join("\n"));
		nodes.file(nextFile).end();
	}

	return { create };
}
