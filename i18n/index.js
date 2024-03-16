// import i18n from "./config";
const i18n = require("./config");

class LocaleService {
	getCurrentLocale() {
		return i18n.getLocale();
	}
	getLocales() {
		return i18n.getLocales();
	}
	setLocale(locale) {
		if (this.getLocales().indexOf(locale) !== -1) {
			i18n.setLocale(locale);
		}
	}
	translate(key, args = undefined) {
		return i18n.__(key, args);
	}
	translatePlurals(phrase, count) {
		return i18n.__n(phrase, count);
	}
}
function useLocale() {
	return new LocaleService();
}

module.exports = { LocaleService, useLocale };
