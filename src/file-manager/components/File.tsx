import Link from "next/link";
import { Node } from "@/nodes/components/Node";
import { useFilesStore } from "@/nodes/store/files";
import { CloseIcon } from "../icons/CloseIcon";

export function File({ children }: { children: React.ReactNode }) {
	const { removeFile } = useFilesStore((state) => state.actions);
	return (
		<Link href={`/file/${children}`}>
			<Node className="hover:bg-[#3c3c3c] cursor-pointer flex justify-between items-center">
				<p>c{children}</p>
				<button
					type="button"
					className="border-2 border-[#3c3c3c] p-2 rounded-sm hover:bg-red-400 cursor-pointer"
					onClick={(e) => {
						e.stopPropagation();
						e.preventDefault();
						removeFile(`c${children}` as string);
					}}
				>
					<CloseIcon alt={`Delete ${children} file`} size={20} />
				</button>
			</Node>
		</Link>
	);
}
