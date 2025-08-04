import { useState } from "react";
import { useCode } from "@/code/hooks/useCode";

const bgColors = {
	Export: "bg-blue-500",
	"Working on it...": "bg-gray-600",
	"Copied!": "bg-green-700",
	"⚠️ Something went wrong": "bg-red-500",
};
type ExportMessage = keyof typeof bgColors;

export default function ExportButton() {
	const [exported, setExported] = useState<ExportMessage>("Export");
	const { code } = useCode();

	function exportCode() {
		setExported("Working on it...");
		navigator.clipboard
			.writeText(code)
			.then(() => setExported("Copied!"))
			.catch(() => setExported("⚠️ Something went wrong"))
			.finally(() => setTimeout(() => setExported("Export"), 1000));
	}

	if (code === "") {
		return (
			<button type="button" className={`bg-gray-700 p-2 rounded-sm`}>
				Export
			</button>
		);
	}

	return (
		<button
			type="button"
			className={`${bgColors[exported]} p-2 rounded-sm cursor-pointer`}
			onClick={exportCode}
		>
			{exported}
		</button>
	);
}
