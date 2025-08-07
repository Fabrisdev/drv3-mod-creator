import type { JSX } from "react";
export type NodeNameTypes = "text" | "start" | "end" | "code" | "file";
export type NodeTypes = Record<NodeNameTypes, (unknown) => JSX.Element>;
export type ParameterProps = {
	id: string;
	data: Record<string, unknown>;
};
