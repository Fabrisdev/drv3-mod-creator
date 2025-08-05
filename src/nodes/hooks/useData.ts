import { useNodes } from "../store/store";

type Props = {
	id: string;
	prop: string;
};

export function useData({ id, prop }: Props): any {
	const nodes = useNodes((state) => state.nodes);
	return nodes.find((node) => node.id === id)?.data[prop];
}
