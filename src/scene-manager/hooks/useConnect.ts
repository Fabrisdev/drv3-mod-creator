import { useNodes } from "@/nodes/store/store";
import type { NodeNameTypes } from "@/nodes/types";

export function useConnect() {
	const { addNode, joinNodes } = useNodes((state) => state.actions);
	function connect(filename: string) {
		let lastNodeId = "";
		let lastXPosition = 0;
		function spawnNode(type: NodeNameTypes, data?: Record<string, unknown>) {
			const id = addNode(type, { x: lastXPosition, y: 0 }, filename, data);
			if (lastNodeId !== "") joinNodes(lastNodeId, id, filename);
			lastNodeId = id;
			lastXPosition += 150;
		}
		const builder = {
			start() {
				spawnNode("start");
				return this as WithoutStart;
			},
			code(code: string) {
				spawnNode("code", { text: code });
				return this as WithoutStart;
			},
			file(to: string) {
				spawnNode("file", { text: to });
				return this as WithoutStart;
			},
			end() {
				spawnNode("end");
				return this as never;
			},
		};
		return builder as OnlyStart;

		type WithoutStart = Omit<typeof builder, "start">;
		type OnlyStart = Pick<typeof builder, "start">;
	}

	return connect;
}
