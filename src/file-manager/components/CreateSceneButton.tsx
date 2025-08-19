import { useRouter } from "next/navigation";
import { useSceneHelper } from "@/scene-manager/hooks/useSceneHelper";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";

export function CreateSceneButton() {
	const sceneHelper = useSceneHelper();
	const router = useRouter();

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const chapter = formData.get("chapter");
		const scene = formData.get("scene");
		if (typeof chapter !== "string" || typeof scene !== "string") return;

		const trimmedChapter = chapter.trim();
		const trimmedScene = scene.trim();
		if (trimmedChapter === "" || trimmedScene === "") return;

		const chapterTransformed = trimmedChapter.padStart(3, "0");
		const sceneTransformed = trimmedScene.padStart(3, "0");
		const filename = `${chapterTransformed}/${sceneTransformed}/000`;

		sceneHelper.create({
			chapter: chapterTransformed,
			scene: sceneTransformed,
		});
		router.push(`/file/${filename}`);
	}

	return (
		<form className="flex gap-2" onSubmit={handleSubmit}>
			<Input name="chapter" placeholder="Chapter" />
			<Input name="scene" placeholder="Scene" />
			<Button type="submit">Create</Button>
		</form>
	);
}
