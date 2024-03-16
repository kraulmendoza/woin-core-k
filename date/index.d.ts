import { DateTime } from "luxon";
export class DateManager {
	constructor(zone?: string);
	withTimestamp(timestamp: Number, zone?: string | undefined): DateManager;
	withDate(date: Date): DateManager;
	toISO(): String;
	toTZ(timeZone: String): DateManager;
}

export function now(zone?: String): DateManager;
