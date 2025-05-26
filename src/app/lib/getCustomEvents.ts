import { Translations } from "@/app/lib/translations"

/* eslint-disable @typescript-eslint/no-unused-vars */

export function getCustomEvents(translations: Translations): ReturnedEvent[] {
	return [
		// {
		// 	id: "nemo33",
		// 	name: translations.customEvents.nemo33.name,
		// 	summary: translations.customEvents.nemo33.summary,
		// 	startDate: "2025-04-19",
		// 	endDate: "2025-04-20",
		// 	imageUrl: "/images/visuel-stage.jpg",
		// 	url: "https://www.planeteapnee.fr/aqua-dance-flow-avec-julie-gautier/",
		// 	isSoldOut: false,
		// 	city: translations.customEvents.nemo33.city,
		// 	banner: translations.customEvents.nemo33.banner,
		// 	banner_sm: translations.customEvents.nemo33.banner_sm,
		// 	highlighted: true,
		// },
		{
			id: "romont",
			name: translations.customEvents.romont.name,
			summary: translations.customEvents.romont.summary,
			startDate: "2025-09-13",
			endDate: "2025-09-14",
			imageUrl: null, // mets une image locale ou null si indisponible
			url: "https://scubashop.ch/formation/aqua-dance-flow-julie-gautier/",
			isSoldOut: false,
			city: translations.customEvents.romont.city,
			banner: translations.customEvents.romont.banner,
			banner_sm: translations.customEvents.romont.banner_sm,
			highlighted: true,
		},
	]
}
