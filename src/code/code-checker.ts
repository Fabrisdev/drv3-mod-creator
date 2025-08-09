export function hasErrors(code: string) {
	return code.split("\n").some((line) => {
		if (line.startsWith("//")) return ok();
		if (!line.startsWith("<")) return err();
		if (!line.endsWith(">")) return err();
	});
}

function ok() {
	return false;
}

function err() {
	return true;
}
