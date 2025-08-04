import type { PropsWithChildren } from "react";

type Props = {
	className?: string;
};

export function Node({ className, children }: PropsWithChildren<Props>) {
	return (
		<div
			className={`${className} p-2 rounded-sm bg-[#1e1e1e] border-2 border-[#3c3c3c]`}
		>
			{children}
		</div>
	);
}
