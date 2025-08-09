import { useQueryNodes } from "./useQueryNodes";

type Properties = {
	text: string;
	character: string;
};

type Props<K extends keyof Properties> = {
	id: string;
	prop: K;
};

export function useData<K extends keyof Properties>({ id, prop }: Props<K>) {
	const nodes = useQueryNodes();
	const node = nodes.find((node) => node.id === id);
	return node?.data[prop] as Properties[K];
}
