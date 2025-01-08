import { Translations } from "@/app/lib/translations"

export function getY40Event(translations: Translations) {
	return {
		id: "y40",
		name: translations.y40Event.name,
		summary: translations.y40Event.summary, 
		date: translations.y40Event.date,
		isoDate: "2025-03-08T14:00:00Z",
		imageUrl: "/images/home-bg.png",
		url: "https://www.y-40.com/en/aqua-dance-flow-julie-gautier-2/",
		isSoldOut: false,
		city: translations.y40Event.city,
	}
}
