// import i18n from "i18n";
// import path from "path";
const i18n = require("i18n");
const path = require("path");
i18n.configure({
	locales: ["en", "es"],
	defaultLocale: "es",
	queryParameter: "lang",
	directory: path.join(__dirname, "../locales"),
	objectNotation: true,
});
module.exports = i18n;
