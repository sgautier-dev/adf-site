export async function getTranslations(locale: string) {
	switch (locale) {
		case "fr":
			return import("@/locales/fr.json")
		case "en":
		default:
			return import("@/locales/en.json")
	}
}
