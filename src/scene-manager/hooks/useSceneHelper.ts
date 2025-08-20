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
		connect(filename).start().code(sceneCode).file(nextFile).end();
	}

	return { create };
}
