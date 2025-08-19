import { sceneCode } from "../scenes";
import { useConnect } from "./useConnect";

type Create = {
	chapter: string;
	scene: string;
};

export function useSceneHelper() {
	const connect = useConnect();

	function create({ chapter, scene }: Create) {
		const filename = `c${chapter}/${scene}/000`;
		connect(filename).start().code(sceneCode);
	}

	return { create };
}
