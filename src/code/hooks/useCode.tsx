import { useQueryEdges } from "@/nodes/hooks/useQueryEdges";
import { useQueryNodes } from "@/nodes/hooks/useQueryNodes";
import { generateCode } from "../node-helper";

export function useCode() {
	const nodes = useQueryNodes();
	const edges = useQueryEdges();
	const code = generateCode({ nodes, edges });

	return { code };
}
