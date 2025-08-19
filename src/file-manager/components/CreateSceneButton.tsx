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

		const filename = `${trimmedChapter}/${trimmedScene}/000`;
		sceneHelper.create({ chapter: trimmedChapter, scene: trimmedScene });
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
