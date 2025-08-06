import Image from "next/image";
import Link from "next/link";
import { Node } from "@/nodes/components/Node";

export function File({ children }: { children: React.ReactNode }) {
	return (
		<Node className="hover:bg-[#3c3c3c] cursor-pointer flex justify-between items-center">
			<Link href={`/file/${children}`}>{children}</Link>
			<button
				type="button"
				className="border-2 border-[#3c3c3c] p-2 rounded-sm hover:bg-red-400 cursor-pointer"
			>
				<Image
					src={"/close.png"}
					alt={`Delete ${children} file`}
					width={20}
					height={20}
				/>
			</button>
		</Node>
	);
}
