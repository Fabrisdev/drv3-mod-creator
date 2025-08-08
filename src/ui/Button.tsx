import type { PropsWithChildren } from "react";

type Props = {
	onClick: () => void;
};

export function Button({ onClick, children }: PropsWithChildren<Props>) {
	return (
		<button
			type="button"
			className={`p-2 rounded-sm bg-[#1e1e1e] border-2 border-[#3c3c3c] hover:bg-[#3c3c3c] cursor-pointer`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
