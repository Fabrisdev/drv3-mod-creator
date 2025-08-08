export function highlight(text: string) {
	const code = text
		.split("\n")
		.map((line) => {
			const lineSplitted = line.split("//");
			if (lineSplitted.length === 1) return escapeHtml(line);
			const lineOnlyWithComments = lineSplitted.slice(1).join("//");
			return `${escapeHtml(lineSplitted[0])}<span style="color: green">${escapeHtml(`//${lineOnlyWithComments}`)}</span>`;
		})
		.join("<br>");
	return code;
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/ /g, "&nbsp;")
		.replace(/\n/g, "<br>");
}
