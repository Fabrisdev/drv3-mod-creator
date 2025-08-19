import { useNodes } from "@/nodes/store/store";
import { sceneCode } from "../scenes";

type Create = {
	chapter: string;
	scene: string;
};

export function useSceneHelper() {
	const { addNode } = useNodes((state) => state.actions);
	function create({ chapter, scene }: Create) {
		const filename = `c${chapter}/${scene}/000`;
		const startId = addNode(
			"start",
			{
				x: 0,
				y: 0,
			},
			filename,
		);
		const codeId = addNode(
			"code",
			{
				x: 50,
				y: 0,
			},
			filename,
			{
				text: sceneCode,
			},
		);
	}
	return { create };
}
