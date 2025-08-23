"use client";

import { useFilename } from "@/file-manager/hooks/useFilename";
import { useFilesStore } from "@/nodes/store/files";
import { Container } from "@/ui/Container";
import { CloseButton } from "./CloseButton";
import { CreateFile } from "./CreateFile";
import { CreateScene } from "./CreateScene";
import { File } from "./File";

type Props = {
	className?: string;
	onAskToClose?: () => void;
};

export function FilePicker({ className, onAskToClose }: Props) {
	const { filename } = useFilename();
	const filenames = useFilesStore((state) => state.filenames);
	const filenamesWithoutCurrentOne = filenames.filter(
		(file) => file !== filename,
	);

	const filenamesMapped = filenamesWithoutCurrentOne
		.map((filename) => filename.slice(1))
		.map((filename) => <File key={filename}>{filename}</File>);

	return (
		<Container className={`min-w-100 flex flex-col gap-2 ${className}`}>
			<div className="flex justify-between items-center">
				<p>
					{filenamesWithoutCurrentOne.length !== 0
						? "Pick a file"
						: filenames.length !== 0
							? "You don't have any other files other than your current one. How about creating one?"
							: "You don't have any files yet. How about creating one?"}
				</p>
				<CloseButton onAskToClose={onAskToClose} />
			</div>
			{filenamesMapped}
			{filenames.length !== 0 &&
				filenamesWithoutCurrentOne.length !== 0 &&
				"Or..."}
			<CreateFile />
			<CreateScene />
		</Container>
	);
}
