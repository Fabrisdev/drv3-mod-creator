import { Container } from "@/ui/Container";
import { Select } from "@/ui/Select";
import { useData } from "../hooks/useData";
import { useUpdateData } from "../hooks/useUpdateDada";

type Props = {
	id: string;
};

export function DeadCharacterParameter({ id }: Props) {
	const character = useData({ id, prop: "character" });
	const { update } = useUpdateData();
	return (
		<Container className="flex gap-2 items-center">
			<p>Character</p>
			<Select
				value={character}
				onChange={(character) => update({ id, data: { character } })}
			>
				<option value="flgDeath_C013_Yonag">Angie Yonaga</option>
				<option value="flgDeath_C004_Gokuh">Gonta Gokuhara</option>
				<option value="flgDeath_C009_Yumen">Himiko Yumeno</option>
				<option value="flgDeath_C015_Akama">Kaede Akamatsu</option>
				<option value="flgDeath_C001_Momot">Kaito Momota</option>
				<option value="flgDeath_C007_Ki-Bo">K1-B0</option>
				<option value="flgDeath_C005_Oma__">Kokichi Oma</option>
				<option value="flgDeath_C006_Shing">Korekiyo Shinguji</option>
				<option value="flgDeath_C008_Tojo_">Kirumi Tojo</option>
				<option value="flgDeath_C010_Haruk">Maki Harukawa</option>
				<option value="flgDeath_C014_Iruma">Miu Iruma</option>
				<option value="flgDeath_C003_Amami">Rantaro Amami</option>
				<option value="flgDeath_C002_Hoshi">Ryoma Hoshi</option>
				<option value="flgDeath_C000_Saiha">Shuichi Saihara</option>
				<option value="flgDeath_C011_Chaba">Tenko Chabashira</option>
				<option value="flgDeath_C012_Shiro">Tsumugi Shirogane</option>
			</Select>
		</Container>
	);
}
