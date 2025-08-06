import { useQueryNodes } from "./useQueryNodes";

type Props = {
	id: string;
	prop: string;
};

export function useData<T>({ id, prop }: Props): T {
	const nodes = useQueryNodes();
	const node = nodes.find((node) => node.id === id);
	return node?.data[prop] as T;
}
