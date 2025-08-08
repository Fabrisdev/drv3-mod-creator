import type { CSSProperties, PropsWithChildren, Ref } from "react";

type Props = {
	className?: string;
	style?: CSSProperties;
	id?: string;
	ref?: Ref<HTMLDivElement> | null;
};

export function Container({
	className,
	children,
	style,
	id,
	ref,
}: PropsWithChildren<Props>) {
	return (
		<div
			id={id}
			ref={ref}
			className={`${className} p-2 rounded-sm bg-[#1e1e1e] border-2 border-[#3c3c3c]`}
			style={style}
		>
			{children}
		</div>
	);
}
