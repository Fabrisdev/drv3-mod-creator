import { useFilename } from "@/file-manager/hooks/useFilename";
import { Button } from "@/ui/Button";
import { useNodes } from "../store/file";

type Props = {
	id: string;
};

export function AddCaseButton({ id }: Props) {
	const { filename } = useFilename();
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
