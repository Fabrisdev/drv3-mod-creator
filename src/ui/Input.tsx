type Props = {
	placeholder?: string;
};

export function Input({ placeholder }: Props) {
	return (
		<input
			type="text"
			className="border-2 border-[#3c3c3c] rounded-sm font-mono"
			placeholder={placeholder}
		/>
	);
}
