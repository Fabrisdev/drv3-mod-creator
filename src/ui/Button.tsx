import type { PropsWithChildren } from "react";

type Props = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ onClick, children }: PropsWithChildren<Props>) {
	return (
		<button
			type="button"
			className={`p-2 rounded-sm bg-[#1e1e1e] border-2 border-[#3c3c3c] hover:bg-[#3c3c3c] cursor-pointer`}
			onClick={(e) => onClick(e)}
		>
			{children}
		</button>
	);
}
