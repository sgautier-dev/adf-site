import { Translations } from "@/app/lib/translations"

/* eslint-disable @typescript-eslint/no-unused-vars */

export function getCustomEvents(translations: Translations): ReturnedEvent[] {
	return [
		{
			id: "bastia",
			name: translations.customEvents.bastia.name,
			summary: translations.customEvents.bastia.summary,
			startDate: "2025-09-19",
			endDate: "2025-09-21",
			imageUrl: "/images/visuel-stage.jpg",
			url: "https://www.marinedivingcenter.com/evenements/",
			isSoldOut: false,
			city: translations.customEvents.bastia.city,
			banner: translations.customEvents.bastia.banner,
			banner_sm: translations.customEvents.bastia.banner_sm,
			highlighted: true,
		},
		{
			id: "romont",
			name: translations.customEvents.romont.name,
			summary: translations.customEvents.romont.summary,
			startDate: "2025-09-13",
			endDate: "2025-09-14",
			imageUrl: null, // mets une image locale ou null si indisponible
			url: "https://scubashop.ch/formation/aqua-dance-flow-julie-gautier/",
			isSoldOut: true,
			city: translations.customEvents.romont.city,
			banner: translations.customEvents.romont.banner,
			banner_sm: translations.customEvents.romont.banner_sm,
			highlighted: false,
		},
		{
			id: "villefranche",
			name: translations.customEvents.villefranche.name,
			summary: translations.customEvents.villefranche.summary,
			startDate: "2025-08-24",
			endDate: "2025-08-24",
			imageUrl: "/images/villefranche-journee-portes-ouvertes.jpeg",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSclTY9PkNz289NCamXQ-xMOUYkrXZwwGYbNGbVgKAVJoFatrQ/viewform?usp=header",
			isSoldOut: true,
			city: translations.customEvents.villefranche.city,
			banner: translations.customEvents.villefranche.banner,
			banner_sm: translations.customEvents.villefranche.banner_sm,
			highlighted: false,
		},
	]
}
