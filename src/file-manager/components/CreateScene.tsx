import { Container } from "@/ui/Container";
import { CreateSceneButton } from "./CreateSceneButton";

export function CreateScene() {
	return (
		<Container className="flex flex-col gap-2">
			<p>Create a new scene</p>
			<CreateSceneButton />
		</Container>
	);
}
