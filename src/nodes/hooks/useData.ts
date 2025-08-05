import { useNodes } from "../store/store";

type Props = {
	id: string;
	prop: string;
};

export function useData({ id, prop }: Props): any {
	const node = useNodes((store) => store.nodes.find((node) => node.id === id));
	return node?.data[prop];
}
