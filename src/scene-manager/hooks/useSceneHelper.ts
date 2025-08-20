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
		const nodes = connect(filename).start({});
		let plainCode = [];
		for (const line of sceneCode) {
			if (typeof line === "string") {
				plainCode.push(line);
				continue;
			}
			if (plainCode.length > 0) {
				nodes.code({ code: plainCode.join("\n") });
				plainCode = [];
			}
			if (line.type === "wak") {
				const { key, value } = line;
				nodes.wak({ key, value: key === "wak050_scene" ? scene : value });
				continue;
			}
			// @ts-ignore
			nodes[line.type](line);
		}
		if (plainCode.length > 0) nodes.code({ code: plainCode.join("\n") });
		nodes.file({ to: nextFile }).end();
	}

	return { create };
}
