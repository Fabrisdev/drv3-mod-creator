type SceneLine =
	| string
	| {
			type: "wak";
			key: string;
			value: string;
	  }
	| {
			type: "time";
			time: "DayTime" | "Night" | "TimeNon";
	  };

export const sceneCode: SceneLine[] = [
	'<MOD modSetScene "tansaku, tansaku_daily, tansaku_free, tansaku_undaily, tansaku_investigte, tansaku_saiban, tansaku_savepoint, saiban, saiban_setup, saiban_pause" non non>',
	'<WAK wkChapter = "Prologue, Chapter1, Chapter2, Chapter, Chapter4, Chapter5, Chapter6, Epilogue, Ainori, Trial, Chapter10, verification">',
	{ type: "time", time: "DayTime" },
	'<WAK wkEveryday = "Everyday, Extraordinary">',
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
	'<FLG "on, off" flgDeath_C000_Saiha>',
	'<FLG "on, off" flgDeath_C001_Momot>',
	'<FLG "on, off" flgDeath_C002_Hoshi>',
	'<FLG "on, off" flgDeath_C003_Amami>',
	'<FLG "on, off" flgDeath_C004_Gokuh>',
	'<FLG "on, off" flgDeath_C005_Oma__>',
	'<FLG "on, off" flgDeath_C006_Shing>',
	'<FLG "on, off" flgDeath_C007_Ki-Bo>',
	'<FLG "on, off" flgDeath_C008_Tojo_>',
	'<FLG "on, off" flgDeath_C009_Yumen>',
	'<FLG "on, off" flgDeath_C010_Haruk>',
	'<FLG "on, off" flgDeath_C011_Chaba>',
	'<FLG "on, off" flgDeath_C012_Shiro>',
	'<FLG "on, off" flgDeath_C013_Yonag>',
	'<FLG "on, off" flgDeath_C014_Iruma>',
	'<FLG "on, off" flgDeath_C015_Akama>',
	'<FLG "on, off" flg068>',
	'<WAK kousoku00 = "0, 1">',
	'<WAK kousoku01 = "0, 1">',
	'<WAK kousoku02 = "0, 1">',
	'<WAK kousoku03 = "0, 1">',
	'<WAK kousoku04 = "0, 1">',
	'<WAK kousoku05 = "0, 1">',
	'<WAK kousoku06 = "0, 1">',
	'<WAK kousoku07 = "0, 1">',
	'<WAK kousoku08 = "0, 1">',
	'<WAK kousoku09 = "0, 1">',
	'<WAK kousoku10 = "0, 1">',
	'<WAK kousoku11 = "0, 1">',
	'<WAK kousoku12 = "0, 1">',
	'<WAK kousoku13 = "0, 1">',
	'<WAK kousoku14 = "0, 1">',
	'<WAK kousokuLast = "0, 1">',
	'<WAK wak050_scene = "scene #">',
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

export function findNextFile(currentFile: string, files: string[]) {
	const sortedFiles = files.sort();
	return sortedFiles.find((f) => f > currentFile);
}
