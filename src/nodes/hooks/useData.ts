import { useQueryNodes } from "./useQueryNodes";

export type Case = {
	id: string;
	value: string;
};

type Properties = {
	text: string;
	character?: string;
	cases: Case[];
	variable: string;
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
