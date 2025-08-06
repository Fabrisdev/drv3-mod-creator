"use client";

import { useShallow } from "zustand/shallow";
import { Node } from "@/nodes/components/Node";
import { useNodes } from "@/nodes/store/store";
import { CreateFile } from "./CreateFile";
import { File } from "./File";

export function FilePicker() {
	const filenames = useNodes(useShallow((state) => Object.keys(state.files)));

	if (filenames.length === 0) {
		return (
			<Node className="min-w-100 flex flex-col gap-2">
				<p>You don't have any files yet. How about creating one?</p>
				<CreateFile />
			</Node>
		);
	}

	const filenamesMapped = filenames.map((filename) => (
		<File key={filename}>{filename}</File>
	));

	return (
		<Node className="min-w-100 flex flex-col gap-2">
			Pick a file
			{filenamesMapped}
			Or...
			<CreateFile />
		</Node>
	);
}
