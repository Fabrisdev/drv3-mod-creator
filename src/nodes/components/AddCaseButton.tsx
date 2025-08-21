import { Button } from "@/ui/Button";
import { useCurrentFileStore } from "../store/hooks/useCurrentFileStore";

type Props = {
	id: string;
};

export function AddCaseButton({ id }: Props) {
	const useFileStore = useCurrentFileStore();
	const { addCase } = useFileStore((state) => state.actions);
	return (
		<Button
			onClick={() => {
				addCase(id);
			}}
		>
			Add case
		</Button>
	);
}
