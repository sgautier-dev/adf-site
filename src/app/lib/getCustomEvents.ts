import { Translations } from "@/app/lib/translations"

/* eslint-disable @typescript-eslint/no-unused-vars */

export function getCustomEvents(translations: Translations): ReturnedEvent[] {
	return [
		{
			id: "nemo33",
			name: translations.customEvents.nemo33.name,
			summary: translations.customEvents.nemo33.summary,
			startDate: "2025-04-19",
			endDate: "2025-04-20",
			imageUrl: "/images/visuel-stage.jpg",
			url: "https://www.planeteapnee.fr/aqua-dance-flow-avec-julie-gautier/",
			isSoldOut: false,
			city: translations.customEvents.nemo33.city,
			banner: translations.customEvents.nemo33.banner,
			banner_sm: translations.customEvents.nemo33.banner_sm,
			highlighted: true,
		},
		{
			id: "grenoble2025",
			name: translations.customEvents.grenoble2025.name,
			summary: translations.customEvents.grenoble2025.summary,
			startDate: "2025-04-11",
			endDate: "2025-04-11",
			imageUrl: null,
			url: "https://www.univ-grenoble-alpes.fr/actualites/agenda/agenda-sport/histoire-et-genese-d-une-nouvelle-discipline-l-aqua-dance-flow-1565082.kjsp",
			isSoldOut: false,
			city: translations.customEvents.grenoble2025.city,
			banner: translations.customEvents.grenoble2025.banner,
			banner_sm: translations.customEvents.grenoble2025.banner_sm,
		},
	]
}
