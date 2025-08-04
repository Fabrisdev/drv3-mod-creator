import { Panel } from "@xyflow/react";
import Image from "next/image";
import { useState } from "react";
import { EdgeTypeSelector } from "./EdgeTypeSelector";
import ExportButton from "./ExportButton";
import { NodeOption } from "./NodeOption";
import { StartNodeOption } from "./StartNodeOption";

export function NodesPanel() {
	const [open, setOpen] = useState(false);

	if (!open)
		return (
			<Panel position="top-left">
				<button
					type="button"
					className="bg-blue-500 cursor-pointer p-2 rounded-sm"
					onClick={() => setOpen(true)}
				>
					<Image src={"/open.png"} width={20} height={20} alt="Close menu" />
				</button>
			</Panel>
		);

	return (
		<Panel position="top-left">
			<div className="bg-[#1e1e1e] p-2 rounded-sm flex flex-col gap-2 border-2 border-[#3c3c3c] min-w-70">
				<div className="flex items-center justify-between">
					<p>Nodes</p>
					<button
						type="button"
						className="bg-red-500 cursor-pointer p-2 rounded-sm"
						onClick={() => setOpen(false)}
					>
						<Image src={"/close.png"} width={16} height={16} alt="Close menu" />
					</button>
				</div>
				<StartNodeOption />
				<NodeOption type="text">Add Text node</NodeOption>
				<NodeOption type="end">Add End node</NodeOption>
				<hr />
				<p>Options</p>
				<ExportButton />
				<EdgeTypeSelector />
			</div>
		</Panel>
	);
}
