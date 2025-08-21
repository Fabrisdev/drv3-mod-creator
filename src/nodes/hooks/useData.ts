import { useFilename } from "@/file-manager/hooks/useFilename";
import { createFileStore } from "../store/file";

export type Case = {
	id: string;
	value: string;
};

type Properties = {
	text?: string;
	character?: string;
	cases?: Case[];
	variable?: string;
	key?: string;
	value?: string;
	time?: string;
	chapter?: string;
	bool?: "off" | "on";
};

type Props<K extends keyof Properties> = {
	id: string;
	prop: K;
};

export function useData<K extends keyof Properties>({ id, prop }: Props<K>) {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	const nodes = useFileStore((state) => state.nodes);
	const node = nodes.find((node) => node.id === id);
	return node?.data[prop] as Properties[K];
}
