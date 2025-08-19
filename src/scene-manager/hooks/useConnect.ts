import { useNodes } from "@/nodes/store/store";

export function useConnect() {
	const { addNode, joinNodes } = useNodes((state) => state.actions);
	function connect(filename: string) {
		let lastNodeId = "";
		let lastXPosition = 0;
		const builder = {
			start() {
				const id = addNode("start", { x: 0, y: 0 }, filename);
				if (lastNodeId !== "") joinNodes(lastNodeId, id, filename);
				lastNodeId = id;
				return this as Omit<typeof builder, "start">;
			},
			code(code: string) {
				const id = addNode("code", { x: lastXPosition + 400, y: 0 }, filename, {
					text: code,
				});
				if (lastNodeId !== "") joinNodes(lastNodeId, id, filename);
				lastXPosition += 400;
				lastNodeId = id;
				return this as Omit<typeof builder, "start">;
			},
		};
		return builder as Pick<typeof builder, "start">;
	}

	return connect;
}
