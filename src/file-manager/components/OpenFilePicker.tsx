import { useEffect, useState } from "react";
import { FilePicker } from "./FilePicker";

export function OpenFilePicker() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		function handleOpen(e: KeyboardEvent) {
			const { key } = e;
			const target = e.target as HTMLElement;
			if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
			if (key === "Escape") setShow(false);
			if (key === "f") setShow(true);
		}

		window.addEventListener("keydown", handleOpen);

		return () => {
			window.removeEventListener("keydown", handleOpen);
		};
	}, []);

	return show ? (
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
			<FilePicker onAskToClose={() => setShow(false)} />
		</div>
	) : null;
}
