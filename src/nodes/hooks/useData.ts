import { useNodes } from "../store/store";

type Props = {
	id: string;
	prop: string;
};

export function useData<T>({ id, prop }: Props): T {
	const node = useNodes((store) => store.nodes.find((node) => node.id === id));
	return node?.data[prop] as T;
}
