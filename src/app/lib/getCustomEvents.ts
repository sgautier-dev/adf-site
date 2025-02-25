import { Translations } from "@/app/lib/translations"

export function getCustomEvents(translations: Translations) {
	return [
		{
			id: "y40",
			name: translations.customEvents.y40.name,
			summary: translations.customEvents.y40.summary,
			startDate: "2025-03-08",
			endDate: "2025-03-09",
			imageUrl: "/images/home-bg.png",
			url: "https://www.y-40.com/en/aqua-dance-flow-julie-gautier-2/",
			isSoldOut: false,
			city: translations.customEvents.y40.city,
		},
		{
			id: "scubashop",
			name: translations.customEvents.scubashop.name,
			summary: translations.customEvents.scubashop.summary,
			startDate: "2025-09-13",
			endDate: "2025-09-14",
			imageUrl: null,
			url: "https://scubashop.ch/formation/aqua-dance-flow-julie-gautier/",
			isSoldOut: false,
			city: translations.customEvents.scubashop.city,
		},
		{
			id: "marinediving",
			name: translations.customEvents.marinediving.name,
			summary: translations.customEvents.marinediving.summary,
			startDate: "2025-09-19",
			endDate: "2025-09-21",
			imageUrl: "/images/marine-diving.jpg",
			url: "https://www.marinedivingcenter.com/evenements/",
			isSoldOut: false,
			city: translations.customEvents.marinediving.city,
		},
	]
}
