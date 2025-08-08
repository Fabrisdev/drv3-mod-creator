export function Select({ children }: { children: React.ReactNode }) {
	return (
		<select className="bg-[#3c3c3c] w-full p-1 rounded-sm">{children}</select>
	);
}
