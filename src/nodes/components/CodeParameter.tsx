import { useId } from "react";
import { CodeEditor } from "@/ui/CodeEditor";

type Props = {
	code: string;
	id: string;
};

export function CodeParameter({ id, code }: Props) {
	const inputId = useId();

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="text-center w-full">
				Code
			</label>
			<CodeEditor code={code} id={id} />
		</div>
	);
}
