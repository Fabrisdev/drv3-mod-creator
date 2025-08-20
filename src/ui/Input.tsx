type Props = {
	placeholder?: string;
	value?: string;
	name?: string;
	onChange?: (newValue: string) => void;
};

export function Input({ placeholder, value, name, onChange }: Props) {
	return (
		<input
			name={name}
			type="text"
			className="border-2 border-[#3c3c3c] rounded-sm font-mono p-2 w-full"
			placeholder={placeholder}
			value={value}
			onChange={(e) => (onChange ? onChange(e.target.value) : "")}
		/>
	);
}
