type SceneLine =
	| string
	| {
			type: "wak";
			key: string;
			value: string;
	  }
	| {
			type: "time";
			time: string;
	  }
	| {
			type: "chapter";
			chapter: string;
	  }
	| {
			type: "dead";
			character: string;
			bool: string;
	  }
	| {
			type: "set_life_in_file";
			text: string;
	  }
	| {
			type: "set_life_in_ui";
			text: string;
	  };

export const sceneCode: SceneLine[] = [
	{
		type: "set_life_in_file",
		text: "tansaku_daily",
	},
	{ type: "chapter", chapter: "Prologue" },
	{ type: "time", time: "DayTime" },
	{
		type: "set_life_in_ui",
		text: "Everyday",
	},
	'<FLG "on, off" flg064>',
	'<FLG "on, off" flg067>',
	{
		type: "wak",
		key: "sin000",
		value: "0",
	},
	{
		type: "wak",
		key: "sin001",
		value: "0",
	},
	{
		type: "wak",
		key: "sin002",
		value: "0",
	},
	{
		type: "wak",
		key: "sin003",
		value: "0",
	},
	{
		type: "wak",
		key: "sin004",
		value: "0",
	},
	{
		type: "wak",
		key: "sin005",
		value: "0",
	},
	{
		type: "wak",
		key: "sin006",
		value: "0",
	},
	{
		type: "wak",
		key: "sin007",
		value: "0",
	},
	{
		type: "wak",
		key: "sin008",
		value: "0",
	},
	{
		type: "wak",
		key: "sin009",
		value: "0",
	},
	{
		type: "wak",
		key: "sin010",
		value: "0",
	},
	{
		type: "wak",
		key: "sin011",
		value: "0",
	},
	{
		type: "wak",
		key: "sin012",
		value: "0",
	},
	{
		type: "wak",
		key: "sin013",
		value: "0",
	},
	{
		type: "wak",
		key: "sin014",
		value: "0",
	},
	{ type: "dead", character: "flgDeath_C000_Saiha", bool: "off" },
	{ type: "dead", character: "flgDeath_C001_Momot", bool: "off" },
	{ type: "dead", character: "flgDeath_C002_Hoshi", bool: "off" },
	{ type: "dead", character: "flgDeath_C003_Amami", bool: "off" },
	{ type: "dead", character: "flgDeath_C004_Gokuh", bool: "off" },
	{ type: "dead", character: "flgDeath_C005_Oma__", bool: "off" },
	{ type: "dead", character: "flgDeath_C006_Shing", bool: "off" },
	{ type: "dead", character: "flgDeath_C007_Ki-Bo", bool: "off" },
	{ type: "dead", character: "flgDeath_C008_Tojo_", bool: "off" },
	{ type: "dead", character: "flgDeath_C009_Yumen", bool: "off" },
	{ type: "dead", character: "flgDeath_C010_Haruk", bool: "off" },
	{ type: "dead", character: "flgDeath_C011_Chaba", bool: "off" },
	{ type: "dead", character: "flgDeath_C012_Shiro", bool: "off" },
	{ type: "dead", character: "flgDeath_C013_Yonag", bool: "off" },
	{ type: "dead", character: "flgDeath_C014_Iruma", bool: "off" },
	{ type: "dead", character: "flgDeath_C015_Akama", bool: "off" },
	'<FLG "on, off" flg068>',
	{
		type: "wak",
		key: "kousoku00",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku01",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku02",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku03",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku04",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku05",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku06",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku07",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku08",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku09",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku10",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku11",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku12",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku13",
		value: "0",
	},
	{
		type: "wak",
		key: "kousoku14",
		value: "0",
	},
	{
		type: "wak",
		key: "kousokuLast",
		value: "0",
	},
	{
		type: "wak",
		key: "wak050_scene",
		value: "0",
	},
	"<OBJ ObjPos000 Obj_ReActionReset Obj_on>",
	'<MOD modReactionVoice pos000 "Voiceline name" message000>',
	'<MOD modReactionVoice pos001 "Voiceline name" message001>',
	'<MOD modReactionVoice pos002 "Voiceline name" message002>',
	'<MOD modReactionVoice pos003 "Voiceline name" message003>',
	'<MOD modReactionVoice pos004 "Voiceline name" message004>',
	'<MOD modReactionVoice pos005 "Voiceline name" message005>',
	'<MOD modReactionVoice pos006 "Voiceline name" message006>',
	'<MOD modReactionVoice pos007 "Voiceline name" message007>',
	'<MOD modReactionVoice pos008 "Voiceline name" message008>',
	'<MOD modReactionVoice pos009 "Voiceline name" message009>',
	'<MOD modReactionVoice pos010 "Voiceline name" message010>',
	'<MOD modReactionVoice pos011 "Voiceline name" message011>',
	'<MOD modReactionVoice pos012 "Voiceline name" message012>',
	'<MOD modReactionVoice pos013 "Voiceline name" message013>',
	'<MOD modReactionVoice pos014 "Voiceline name" message014>',
	'<MOD modReactionVoice pos015 "Voiceline name" message015>',
	'<MAP "Location name" "map start position" mapModePreload>',
];

function parseFileName(file: string) {
	return file
		.slice(1)
		.split("/")
		.map((part) => parseInt(part));
}

function cmp(a: string, b: string) {
	const pa = parseFileName(a);
	const pb = parseFileName(b);
	for (let i = 0; i < 3; i++) {
		if (pa[i] !== pb[i]) return pa[i] - pb[i];
	}
	return 0;
}

export function findNextFile(currentFile: string, files: string[]) {
	let candidate: string | undefined;
	for (const f of files) {
		if (cmp(f, currentFile) > 0 && (!candidate || cmp(f, candidate) < 0)) {
			candidate = f;
		}
	}
	return candidate;
}
