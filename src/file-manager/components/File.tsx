import Image from "next/image";
import Link from "next/link";
import { Node } from "@/nodes/components/Node";
import { useNodes } from "@/nodes/store/store";

export function File({ children }: { children: React.ReactNode }) {
	const { deleteFile } = useNodes((state) => state.actions);
	return (
		<Link href={`/file/${children}`}>
			<Node className="hover:bg-[#3c3c3c] cursor-pointer flex justify-between items-center">
				<p>{children}</p>
				<button
					type="button"
					className="border-2 border-[#3c3c3c] p-2 rounded-sm hover:bg-red-400 cursor-pointer"
					onClick={(e) => {
						e.stopPropagation();
						e.preventDefault();
						deleteFile(children as string);
					}}
				>
					<Image
						src={"/close.png"}
						alt={`Delete ${children} file`}
						width={20}
						height={20}
					/>
				</button>
			</Node>
		</Link>
	);
}
