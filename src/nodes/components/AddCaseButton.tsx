import { useParams } from "next/navigation";
import { Button } from "@/ui/Button";
import { useNodes } from "../store/store";

type Props = {
	id: string;
};

export function AddCaseButton({ id }: Props) {
	const { filename } = useParams();
	const { addCase } = useNodes((state) => state.actions);
	return (
		<Button
			onClick={() => {
				addCase(id, filename as string);
			}}
		>
			Add case
		</Button>
	);
}
