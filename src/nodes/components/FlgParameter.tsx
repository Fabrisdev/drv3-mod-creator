import { Container } from "@/ui/Container";
import { Input } from "@/ui/Input";

export function FlgParameter() {
	return (
		<Container className="flex gap-2 items-center">
			<p>Flag</p>
			<Input placeholder="Flag" />
		</Container>
	);
}
