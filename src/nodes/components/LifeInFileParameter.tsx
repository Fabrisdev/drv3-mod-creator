import { Select } from "@/ui/Select";

export function LifeInFileParameter() {
	return (
		<Select>
			<option value="tansaku_daily">Daily Life</option>
			<option value="tansaku_undaily">Deadly Life</option>
			<option value="tansaku_investigte">Investigation Start</option>
			<option value="tansaku_free">Free Time</option>
			<option value="tansaku_savepoint">Save Point</option>
			<option value="tansaku">tansaku</option>
			<option value="tansaku_saiban">tansaku_saiban</option>
			<option value="saiban">saiban</option>
			<option value="saiban_setup">saiban_setup</option>
			<option value="saiban_pause">saiban_pause</option>
		</Select>
	);
}
