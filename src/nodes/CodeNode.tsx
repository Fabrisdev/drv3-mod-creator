import { Handle, type NodeProps, Position } from "@xyflow/react";
import { hasErrors } from "@/code/code-checker";
import { CodeParameter } from "./components/CodeParameter";
import { Node } from "./components/Node";
import { useData } from "./hooks/useData";

export function CodeNode({ id }: NodeProps) {
	const code = useData({ id, prop: "text" }) ?? "";
	const errors = hasErrors(code);

	const borderColor = errors.hasError ? "border-red-400" : "border-[#3c3c3c]";
	return (
		<Node className={borderColor}>
			{errors.hasError && <p>⚠️ {errors.error}</p>}
			<CodeParameter id={id} code={code} />
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</Node>
	);
}
