import type { NodeNameTypes } from "./types";

export const nodeNames: Record<NodeNameTypes, string> = {
	start: "Start node",
	text: "Text node",
	code: "Code node",
	file: "File node",
	end: "End node",
	switch: "Switch node",
	set_chapter: "Set chapter node",
	set_time: "Set time node",
	wak: "WAK node",
	set_dead: "Set dead node",
	life_in_file: "Set type of life in file",
};
