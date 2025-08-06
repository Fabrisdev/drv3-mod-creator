import { FilePicker } from "@/file-manager/components/FilePicker";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-svh">
			<p>Please choose the file you wish to switch to</p>
			<FilePicker />
		</div>
	);
}
