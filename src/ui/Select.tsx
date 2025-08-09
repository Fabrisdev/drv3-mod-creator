import type { PropsWithChildren } from "react";

type Props = {
	value?: string;
	onChange?: (newValue: string) => void;
};

export function Select({
	children,
	value,
	onChange,
}: PropsWithChildren<Props>) {
	return (
		<select
			className="bg-[#3c3c3c] w-full p-1 rounded-sm"
			value={value}
			onChange={(e) => (onChange ? onChange(e.target.value) : "")}
		>
			{children}
		</select>
	);
}
