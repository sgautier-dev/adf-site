import { Translations } from "@/app/lib/translations"

const imageMap: Record<string, string | null> = {
	nemo33: "/images/visuel-stage.jpg",
}
export function getCustomEvents(translations: Translations) {
	return [
		{
			id: "nemo33",
			name: translations.customEvents.nemo33.name,
			summary: translations.customEvents.nemo33.summary,
			startDate: "2025-04-19",
			endDate: "2025-04-20",
			imageUrl: imageMap["nemo33"] ?? null,
			url: "https://www.planeteapnee.fr/aqua-dance-flow-avec-julie-gautier/",
			isSoldOut: false,
			city: translations.customEvents.nemo33.city,
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
		},
	]
}
