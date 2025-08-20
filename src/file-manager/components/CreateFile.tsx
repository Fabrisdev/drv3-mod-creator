import { Node } from "@/nodes/components/Node";
import { CreateFileButton } from "./CreateFileButton";

export function CreateFile() {
	return (
		<Node className="flex flex-col gap-2">
			<p>Create a new file</p>
			<CreateFileButton />
		</Node>
	);
}
