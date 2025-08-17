import { useParams } from "next/navigation";

export function useFilename() {
	const { chapter, scene, location } = useParams();
	return { filename: `c${chapter}/${scene}/${location}` };
}
