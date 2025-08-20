import { Button } from "@/ui/Button";
import { CloseIcon } from "../icons/CloseIcon";

type Props = {
	onAskToClose?: () => void;
};

export function CloseButton({ onAskToClose }: Props) {
	if (onAskToClose === undefined) return null;
	return (
		<Button onClick={onAskToClose}>
			<CloseIcon alt="Close file picker menu" size={15} />
		</Button>
	);
}
