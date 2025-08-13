type Props = {
	placeholder?: string;
	value: string;
	onChange: (newValue: string) => void;
};

export function Input({ placeholder, value, onChange }: Props) {
	return (
		<input
			type="text"
			className="border-2 border-[#3c3c3c] rounded-sm font-mono p-2"
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
}
