import { useNodes } from "@/nodes/store/store";
import { sceneCode } from "../scenes";

type Create = {
	chapter: string;
	scene: string;
};

export function useSceneHelper() {
	const { addNode } = useNodes((state) => state.actions);
	function create({ chapter, scene }: Create) {
		addNode(
			"code",
			{
				x: 0,
				y: 0,
			},
			`c${chapter}/${scene}/000`,
			{
				text: sceneCode,
			},
		);
	}
	return { create };
}
