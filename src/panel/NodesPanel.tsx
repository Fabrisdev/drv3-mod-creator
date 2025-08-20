import { Panel } from "@xyflow/react";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/ui/Container";
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
					<p>Nodes store</p>
					<button
						type="button"
						className="bg-red-500 cursor-pointer p-2 rounded-sm"
						onClick={() => setOpen(false)}
					>
						<Image src={"/close.png"} width={16} height={16} alt="Close menu" />
					</button>
				</div>
				<Container className="flex flex-col gap-2">
					<p>Easy nodes</p>
					<StartNodeOption />
					<NodeOption type="text">Add Text node</NodeOption>
					<NodeOption type="file">Add File node</NodeOption>
					<NodeOption type="switch">Add Switch node</NodeOption>
					<NodeOption type="set_time">Add Set time node</NodeOption>
					<NodeOption type="set_chapter">Add Set chapter node</NodeOption>
					<NodeOption type="set_dead">Add Set dead node</NodeOption>
					<NodeOption type="life_in_file">Add Set life in file node</NodeOption>
					<NodeOption type="life_in_ui">Add Set life in UI node</NodeOption>
					<NodeOption type="end">Add End node</NodeOption>
				</Container>
				<Container className="flex flex-col gap-2">
					<p>Raw nodes</p>
					<NodeOption type="wak">Add WAK node</NodeOption>
					<NodeOption type="code">Add FLG node</NodeOption>
					<NodeOption type="code">Add OBJ node</NodeOption>
					<NodeOption type="code">Add Code node</NodeOption>
				</Container>

				<p>Options</p>
				<ExportButton />
				<EdgeTypeSelector />
			</div>
		</Panel>
	);
}
