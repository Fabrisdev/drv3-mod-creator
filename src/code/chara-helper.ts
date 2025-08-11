export function extractPreviousCharacter(code: string) {
	const regex = /<CHN\s+([^>]+)>/g;

	const matches = [...code.matchAll(regex)];
	if (matches.length === 0) {
		return;
	} else {
		const lastChn = matches[matches.length - 1][1];
		return lastChn.slice(1, 4);
	}
}
