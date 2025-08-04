import { Panel } from "@xyflow/react";
import { useEffect, useState } from "react";
import { Node } from "@/nodes/components/Node";
import { useCode } from "./hooks/useCode";

export function CodePanel() {
	const [visible, setVisible] = useState(false);
	const { code } = useCode();

	useEffect(() => {
		setVisible(code !== "");
	}, [code]);

	if (!visible) return null;
	return (
		<Panel position="top-right">
			<Node className="w-70 whitespace-pre-line">
				<p className="text-center">Code generated</p>
				<p>{code}</p>
			</Node>
		</Panel>
	);
}
