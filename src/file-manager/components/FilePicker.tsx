"use client";

import { useShallow } from "zustand/shallow";
import { Node } from "@/nodes/components/Node";
import { useNodes } from "@/nodes/store/store";
import { CreateFileButton } from "./CreateFileButton";
import { File } from "./File";

export function FilePicker() {
	const filenames = useNodes(useShallow((state) => Object.keys(state.files)));
	const filenamesMapped = filenames.map((filename) => (
		<File key={filename}>{filename}</File>
	));
	return (
		<Node className="min-w-100 flex flex-col gap-2">
			Pick a file
			{filenamesMapped}
			Or...
			<Node className="flex flex-col gap-2">
				<p>Create a new one</p>
				<CreateFileButton />
			</Node>
		</Node>
	);
}
