type HasError = { hasError: false } | { hasError: true; error: string };

export function hasErrors(code: string): HasError {
	const lines = code.split("\n").map((line) => line.trim());
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (line.startsWith("//")) continue;
		const lineWithoutComments = line.split("//")[0].trim();
		if (lineWithoutComments === "") continue;
		if (!lineWithoutComments.startsWith("<"))
			return err(`Missing starting '<' in line ${i + 1}`);
		if (!lineWithoutComments.endsWith(">"))
			return err(`Missing ending '>' in line ${i + 1}`);
	}
	return ok();
}

function ok(): HasError {
	return { hasError: false };
}

function err(error: string): HasError {
	return {
		hasError: true,
		error,
	};
}
