"use client";

import { useReactFlow } from "@xyflow/react";
import type { PropsWithChildren } from "react";
import { useFilename } from "@/file-manager/hooks/useFilename";
import { useNodes } from "@/nodes/store/file";
import type { NodeNameTypes } from "@/nodes/types";

type Props = {
	type: NodeNameTypes;
	disabled?: boolean;
};

export function NodeOption({
	type,
	disabled,
	children,
}: PropsWithChildren<Props>) {
	const { filename } = useFilename();
	const { addNode } = useNodes((state) => state.actions);
	const { screenToFlowPosition } = useReactFlow();

	function handleAddNode() {
		const position = screenToFlowPosition({
			x: window.innerWidth / 2,
			y: window.innerHeight / 2,
		});

		addNode(type, position, filename as string);
	}

	if (disabled)
		return (
			<button type="button" className="bg-gray-700 p-2 rounded-sm line-through">
				{children}
			</button>
		);

	return (
		<button
			type="button"
			className="bg-gray-600 p-2 rounded-sm cursor-pointer"
			onClick={handleAddNode}
		>
			{children}
		</button>
	);
}
