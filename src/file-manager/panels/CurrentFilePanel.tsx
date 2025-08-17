import { Panel } from "@xyflow/react";
import { useFilename } from "@/file-manager/hooks/useFilename";

export function CurrentFilePanel() {
	const filename = useFilename();
	return (
		<Panel
			position="top-center"
			className="bg-[#1e1e1e] p-2 border-2 border-[#3c3c3c] rounded-sm"
		>
			<p>Current file: {filename}</p>
		</Panel>
	);
}
