import { useNodes } from "@/nodes/store/file";
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
			lastXPosition += 300;
		}
		const builder = {
			start(_: Record<string, never>) {
				spawnNode("start");
				return this as WithoutStart;
			},
			code({ code }: { code: string }) {
				spawnNode("code", { text: code });
				lastXPosition += 350;
				return this as WithoutStart;
			},
			file({ to }: { to?: string }) {
				if (to === undefined) return this as WithoutStart;
				spawnNode("file", { text: to });
				return this as WithoutStart;
			},
			end() {
				spawnNode("end");
				return this as never;
			},
			wak({ key, value }: { key: string; value: string }) {
				spawnNode("wak", { key, value });
				lastXPosition += 300;
				return this as WithoutStart;
			},
			time({ time }: { time: string }) {
				spawnNode("set_time", { time });
				return this as WithoutStart;
			},
			chapter({ chapter }: { chapter: string }) {
				spawnNode("set_chapter", { chapter });
				return this as WithoutStart;
			},
			dead({ character, bool }: { character: string; bool: string }) {
				spawnNode("set_dead", { character, bool });
				lastXPosition += 150;
				return this as WithoutStart;
			},
			set_life_in_file({ text }: { text: string }) {
				spawnNode("life_in_file", { text });
				return this as WithoutStart;
			},
			set_life_in_ui({ text }: { text: string }) {
				spawnNode("life_in_ui", { text });
				return this as WithoutStart;
			},
			flg({ text, bool }: { text: string; bool: string }) {
				spawnNode("flg", { text, bool });
				lastXPosition += 250;
			},
		};
		return builder as OnlyStart;

		type WithoutStart = Omit<typeof builder, "start">;
		type OnlyStart = Pick<typeof builder, "start">;
	}

	return connect;
}
