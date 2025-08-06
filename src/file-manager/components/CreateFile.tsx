import { Node } from "@/nodes/components/Node";
import { CreateFileButton } from "./CreateFileButton";

export function CreateFile() {
	return (
		<Node className="flex flex-col gap-2">
			<p>Create a new one</p>
			<CreateFileButton />
		</Node>
	);
}
