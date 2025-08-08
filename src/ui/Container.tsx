import type { CSSProperties, PropsWithChildren } from "react";

type Props = {
	className?: string;
	style?: CSSProperties;
};

export function Container({
	className,
	children,
	style,
}: PropsWithChildren<Props>) {
	return (
		<div
			className={`${className} p-2 rounded-sm bg-[#1e1e1e] border-2 border-[#3c3c3c]`}
			style={style}
		>
			{children}
		</div>
	);
}
