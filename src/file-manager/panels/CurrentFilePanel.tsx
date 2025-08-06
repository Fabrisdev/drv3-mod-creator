import { Panel } from "@xyflow/react";
import { useParams } from "next/navigation";
import { useNodes } from "@/nodes/store/store";

export function CurrentFilePanel() {
	const { filename } = useParams();
	return (
		<Panel
			position="top-center"
			className="bg-[#1e1e1e] p-2 border-2 border-[#3c3c3c] rounded-sm"
		>
			<p>Current file: {filename}</p>
		</Panel>
	);
}
