import { Translations } from "@/app/lib/translations"

/* eslint-disable @typescript-eslint/no-unused-vars */

export function getCustomEvents(translations: Translations): ReturnedEvent[] {
	return [
		{
			id: "corse",
			name: translations.customEvents.corse.name,
			summary: translations.customEvents.corse.summary,
			startDate: "2026-07-01",
			endDate: "2026-07-05",
			imageUrl: "/images/retraite_bastia_072026.jpg",
			url: "https://www.leyogascope.com/sejours/p/retraite-yoga-bien-etre-corse-2",
			isSoldOut: false,
			city: translations.customEvents.corse.city,
			banner: translations.customEvents.corse.banner,
			banner_sm: translations.customEvents.corse.banner_sm,
			highlighted: true,
		},
		{
			id: "acores",
			name: translations.customEvents.acores.name,
			summary: translations.customEvents.acores.summary,
			startDate: "2026-08-24",
			endDate: "2026-08-31",
			imageUrl: "/images/stage_acores_082026.jpg",
			url: "/contact",
			isSoldOut: false,
			city: translations.customEvents.acores.city,
			banner: translations.customEvents.acores.banner,
			banner_sm: translations.customEvents.acores.banner_sm,
			highlighted: false,
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
