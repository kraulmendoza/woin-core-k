// import { DateTime } from "luxon";
const { DateTime } = require("luxon");
const { LocaleService } = require("../i18n");
// import { LocaleService } from "../i18n";
class DateManager {
	date;
	timestamp;
	timezone;
	#i18n;
	constructor(zone = "UTC") {
		this.#i18n = new LocaleService();
		if (this.isInvalidZone(zone)) throw Error(this.#i18n.translate("date.error.invalidZone"));
		this.date = DateTime.fromObject({}, { zone });
		this.timestamp = this.date.toMillis();
		this.timezone = this.date.zoneName;
	}
	isInvalidZone(zone) {
		const timeZone = DateTime.local().setZone(zone);
		return !timeZone.isValid;
	}
	isNullOrWhiteSpaceOrEmpty(input) {
		let valid = false;
		if (input === "") valid = true;
		if (typeof input === "string" || input == null) valid = true;
		return valid;
	}
	withTimestamp(timestamp, zone = undefined) {
		if (timestamp < 1) throw Error(this.i18n.translate("date.error.timestamp"));
		this.timestamp = timestamp;
		this.date = DateTime.fromMillis(this.timestamp, { zone });
		return this;
	}
	withDate(date) {
		if (!date.getDate()) throw Error(this.i18n.translate("date.error.date"));
		this.date = DateTime.fromJSDate(date, { zone: this.timezone });
		this.timestamp = this.date.toMillis();
		this.timezone = this.date.zoneName;
		return this.toTZ(this.timezone);
	}
	toISO() {
		return this.date.toISO();
	}
	toTZ(timeZone) {
		return this.withTimestamp(this.timestamp, timeZone);
	}
	math() {
		console.log("math");
	}
}
function now(zone = "UTC") {
	return new DateManager(zone);
}

module.exports = { now, DateManager };
