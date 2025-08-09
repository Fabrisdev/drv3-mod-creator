import { useEffect, useRef, useState } from "react";
import type { Position } from "@/nodes/types";
import { Menu } from "./components/Menu";

export function ContextMenu({ children }: { children: React.ReactNode }) {
	const [position, setPosition] = useState<Position | null>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleKey(e: KeyboardEvent) {
			if (e.key === "Escape") setPosition(null);
		}

		function handleClick(e: MouseEvent) {
			const PRIMARY_BUTTON = 0;
			if (e.button !== PRIMARY_BUTTON) return;
			const target = e.target as HTMLElement;
			if (menuRef.current?.contains(target)) return;
			setPosition(null);
		}

		window.addEventListener("keydown", handleKey);
		window.addEventListener("click", handleClick);
		return () => {
			window.removeEventListener("keydown", handleKey);
			window.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div
			role="dialog"
			onContextMenu={(e) => {
				e.preventDefault();
				setPosition({ x: e.pageX, y: e.pageY });
			}}
		>
			{children}
			<Menu
				position={position}
				ref={menuRef}
				closeMenu={() => setPosition(null)}
			/>
		</div>
	);
}
