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
	]
}
