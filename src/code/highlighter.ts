export function highlight(text: string) {
	const code = text
		.split("\n")
		.map((line) => {
			const html = escapeHtml(line);
			const coloredComments = colorComments(html);
			const coloredBrackets = colorBrackets(coloredComments);
			const coloredKeywords = colorKeywords(coloredBrackets);
			const coloredEquals = colorEquals(coloredKeywords);
			return coloredEquals;
		})
		.join("<br>");
	return code;
}

function colorEquals(html: string) {
	return html.replace(
		/(&nbsp;=&nbsp;)/g,
		'<span style="color: #7982D6">$1</span>',
	);
}

function colorKeywords(html: string) {
	const color = "#79AAD6";
	const keywords = [
		"LAB",
		"WAK",
		"FDS",
		"FLG",
		"FIL",
		"BTN",
		"LOC",
		"END",
		"SWI",
		"JMN",
		"CAS",
		"LBN",
		"MAP",
		"OBJ",
		"ARE",
		"MOD",
		"CHR",
		"BGO",
		"LIG",
		"HUM",
		"CHK",
		"JMP",
		"CHN",
	];
	const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "g");
	return html.replace(regex, `<span style="color: ${color}">$1</span>`);
}

function colorComments(html: string) {
	const color = "green";
	return html.replace(/(\/\/.*)/g, `<span style="color: ${color}">$1</span>`);
}

function colorBrackets(html: string) {
	const color = "#D6B279";
	html = html.replace(/(&lt;)/g, `<span style="color: ${color}">$1</span>`);
	html = html.replace(/(&gt;)/g, `<span style="color: ${color}">$1</span>`);
	return html;
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/ /g, "&nbsp;")
		.replace(/\n/g, "<br>");
}
