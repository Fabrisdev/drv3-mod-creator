"use client";

import { useShallow } from "zustand/shallow";
import { Node } from "@/nodes/components/Node";
import { useNodes } from "@/nodes/store/store";
import { File } from "./File";

export function FilePicker() {
	const filenames = useNodes(useShallow((state) => Object.keys(state.files)));
	const filenamesMapped = filenames.map((filename) => (
		<File key={filename}>{filename}</File>
	));
	return (
		<Node className="min-w-100 min-h-40 flex flex-col gap-2">
			{filenamesMapped}
		</Node>
	);
}
