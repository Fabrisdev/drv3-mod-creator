import { Panel } from "@xyflow/react";
import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { Node } from "@/nodes/components/Node";
import { highlight } from "./highlighter";
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
			<Node className="whitespace-pre-line opacity-30 hover:opacity-100 duration-150 max-h-100 overflow-y-scroll max-w-90 text-sm">
				<p className="text-center">Code generated</p>
				<Editor
					value={code}
					highlight={highlight}
					className="whitespace-pre-line opacity-30 hover:opacity-100 duration-150 max-h-100 overflow-y-scroll max-w-90 text-sm"
					disabled
					onValueChange={() => {}}
				/>
			</Node>
		</Panel>
	);
}
