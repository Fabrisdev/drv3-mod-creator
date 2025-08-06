import Link from "next/link";
import { useState } from "react";

export function CreateFileButton() {
	const [filename, setFilename] = useState("");

	return (
		<form className="flex gap-2">
			<input
				placeholder="File name"
				className="border-2 border-[#3c3c3c] rounded-sm p-2 w-full"
				onChange={(e) => setFilename(e.target.value)}
			/>
			<Link
				href={`/file/${filename}`}
				className="p-2 rounded-sm bg-[#1e1e1e] border-2 border-[#3c3c3c] cursor-pointer hover:bg-[#3c3c3c]"
			>
				Create
			</Link>
		</form>
	);
}
