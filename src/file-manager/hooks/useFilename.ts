import { useParams } from "next/navigation";

export function useFilename() {
	const { chapter, scene, location } = useParams();
	const isScene = parseInt(location as string) === 0;
	return { filename: `c${chapter}/${scene}/${location}`, isScene };
}
