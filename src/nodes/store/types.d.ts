import type { Node } from "@xyflow/react";
import type { Case } from "../hooks/useData";

export interface TypedNode extends Node {
	data: {
		variable?: string;
		cases?: Case[];
		text?: string;
		character?: string;
		key?: string;
		value?: string;
		time?: string;
		chapter?: string;
		bool?: "off" | "on";
	};
}
