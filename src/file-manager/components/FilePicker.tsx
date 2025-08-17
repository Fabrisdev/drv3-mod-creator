"use client";

import { useShallow } from "zustand/shallow";
import { useFilename } from "@/file-manager/hooks/useFilename";
import { Node } from "@/nodes/components/Node";
import { useNodes } from "@/nodes/store/store";
import { CloseIcon } from "../icons/CloseIcon";
import { CreateFile } from "./CreateFile";
import { File } from "./File";

type Props = {
	className?: string;
	onAskToClose?: () => void;
};

export function FilePicker({ className, onAskToClose }: Props) {
	const filename = useFilename();
	const filenames = useNodes(
		useShallow((state) => Object.keys(state.files)),
	).filter((file) => file !== filename);

	if (filenames.length === 0) {
		return (
			<Node className={`min-w-100 flex flex-col gap-2 ${className}`}>
				<p>You don't have any files yet. How about creating one?</p>
				<CreateFile />
			</Node>
		);
	}

	const filenamesMapped = filenames.map((filename) => (
		<File key={filename}>{filename}</File>
	));

	return (
		<Node className={`min-w-100 flex flex-col gap-2 ${className}`}>
			<div className="flex justify-between items-center">
				<p>Pick a file</p>
				{onAskToClose && (
					<button
						type="button"
						onClick={onAskToClose}
						className="cursor-pointer"
					>
						<CloseIcon alt="Close file picker menu" size={15} />
					</button>
				)}
			</div>
			{filenamesMapped}
			Or...
			<CreateFile />
		</Node>
	);
}
