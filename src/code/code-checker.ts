export function hasErrors(code: string) {
	return code
		.split("\n")
		.map((line) => line.trim())
		.some((line) => {
			if (line.startsWith("//")) return ok();
			const lineWithoutComments = line.split("//")[0].trim();
			if (lineWithoutComments === "") return ok();
			if (!lineWithoutComments.startsWith("<")) return err();
			if (!lineWithoutComments.endsWith(">")) return err();
		});
}

function ok() {
	return false;
}

function err() {
	return true;
}
