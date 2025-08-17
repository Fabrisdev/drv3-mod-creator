import { useParams } from "next/navigation";

export function useFilename() {
	const { chapter, scene, location } = useParams();
	return `c${chapter}/${scene}/${location}`;
}
