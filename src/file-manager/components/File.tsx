import Link from "next/link";
import { Node } from "@/nodes/components/Node";

export function File({ children }: { children: React.ReactNode }) {
	return (
		<Node className="hover:bg-[#3c3c3c] cursor-pointer">
			<Link href={`/file/${children}`}>{children}</Link>
		</Node>
	);
}
