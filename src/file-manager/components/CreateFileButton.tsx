import { useRouter } from "next/navigation";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";

export function CreateFileButton() {
	const router = useRouter();

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const chapter = formData.get("chapter");
		const scene = formData.get("scene");
		const location = formData.get("location");
		if (
			typeof chapter !== "string" ||
			typeof scene !== "string" ||
			typeof location !== "string"
		)
			return;

		const trimmedChapter = chapter.trim();
		const trimmedScene = scene.trim();
		const trimmedLocation = location.trim();
		if (trimmedChapter === "" || trimmedScene === "" || trimmedLocation === "")
			return;

		const filename = `c${trimmedChapter}/${trimmedScene}/${trimmedLocation}`;
		router.push(`/file/${filename}`);
	}

	return (
		<form className="flex gap-2" onSubmit={handleSubmit}>
			<Input name="chapter" placeholder="Chapter" />
			<Input name="scene" placeholder="Scene" />
			<Input name="location" placeholder="Location ID" />
			<Button type="submit">Create</Button>
		</form>
	);
}
