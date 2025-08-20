import type { JSX } from "react";
export type NodeNameTypes =
	| "text"
	| "start"
	| "end"
	| "code"
	| "file"
	| "switch"
	| "wak"
	| "set_time"
	| "set_chapter"
	| "set_dead"
	| "life_in_file"
	| "life_in_ui"
	| "flg";
export type NodeTypes = Record<NodeNameTypes, (unknown) => JSX.Element>;
export type ParameterProps = {
	id: string;
	data: Record<string, unknown>;
};

export type Position = {
	x: number;
	y: number;
};
