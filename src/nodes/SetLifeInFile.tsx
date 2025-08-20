import { LifeInFileParameter } from "./components/LifeInFileParameter";
import { Node } from "./components/Node";

export function SetLifeInFile() {
	return (
		<Node>
			<p>Type of life in file</p>
			<LifeInFileParameter />
		</Node>
	);
}
