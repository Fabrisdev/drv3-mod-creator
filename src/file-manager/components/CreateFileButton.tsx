import { useRouter } from "next/navigation";
import { useState } from "react";

export function CreateFileButton() {
	const [filename, setFilename] = useState("");
	const router = useRouter();

	function handleClick() {
		if (filename === "") return;
		router.push(`/file/${filename}`);
	}

	return (
		<form
			className="flex gap-2"
			onSubmit={(e) => {
				e.preventDefault();
				handleClick();
			}}
		>
			<input
				placeholder="File name"
				className="border-2 border-[#3c3c3c] rounded-sm p-2 w-full"
				onChange={(e) => setFilename(e.target.value)}
			/>
			<button
				type="button"
				className={`p-2 rounded-sm bg-[#1e1e1e] border-2 border-[#3c3c3c] hover:bg-[#3c3c3c] ${filename !== "" && "cursor-pointer"}`}
				onClick={handleClick}
			>
				Create
			</button>
		</form>
	);
}
