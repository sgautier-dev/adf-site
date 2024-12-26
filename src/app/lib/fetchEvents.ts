interface EventbriteEvent {
	id: string
	name?: { text?: string }
	description?: { text?: string }
	start?: { local?: string }
	end?: { local?: string }
	logo?: { url?: string }
	url?: string
	ticket_availability?: {
		is_sold_out?: boolean
	}
	venue?: {
		address?: {
			city?: string
		}
	}
}

function formatEventDateTime(
	startISO: string,
	endISO: string
): { formattedDate: string; isoDate: string } {
	const startDate = new Date(startISO)
	const endDate = new Date(endISO)

	const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
		day: "numeric",
		month: "short",
		year: "numeric",
	})

	const timeFormatter = new Intl.DateTimeFormat("fr-FR", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	})

	const dateStr = dateFormatter.format(startDate)
	const startTimeStr = timeFormatter.format(startDate).replace(":", "h")
	const endTimeStr = timeFormatter.format(endDate).replace(":", "h")

	return {
		formattedDate:
			dateStr.charAt(0).toUpperCase() +
			dateStr.slice(1) +
			`, ${startTimeStr} - ${endTimeStr}`,
		isoDate: startISO, // Return raw ISO date for sorting
	}
}

function constructEventbriteUrl(organizationId: string): string {
	return `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/?status=live&expand=logo,venue,ticket_availability`
}

export async function fetchEvents(): Promise<ReturnedEvent[]> {
	const token = process.env.EVENTBRITE_TOKEN
	const organizationId = process.env.EVENTBRITE_ORG_ID

	if (!token || !organizationId) {
		throw new Error(
			"Missing required environment variables: EVENTBRITE_TOKEN or EVENTBRITE_ORG_ID."
		)
	}

	const url = constructEventbriteUrl(organizationId)

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
			cache: "force-cache",
		},
	})

	if (!res.ok) {
		const errorText = await res.text()
		console.error(`Eventbrite API Error: ${errorText}`)
		throw new Error(`Failed to fetch events from Eventbrite: ${errorText}`)
	}

	const data = await res.json()

	if (!data.events || !Array.isArray(data.events)) {
		throw new Error("Invalid response format from Eventbrite API.")
	}

	return data.events.map((event: EventbriteEvent) => {
		const name = event.name?.text || "Nom non spécifié"
		const summary = event.description?.text || "Pas de description disponible."
		const startLocal = event.start?.local || ""
		const endLocal = event.end?.local || ""
		const { formattedDate, isoDate } =
			startLocal && endLocal
				? formatEventDateTime(startLocal, endLocal)
				: { formattedDate: "", isoDate: "" }
		const isSoldOut = event.ticket_availability?.is_sold_out
		const city = event.venue?.address?.city || "Lieu non spécifié"

		return {
			id: event.id,
			name,
			summary,
			date: formattedDate,
			isoDate, // for sorting
			imageUrl: event.logo?.url || null,
			url: event.url || "",
			isSoldOut,
			city,
		}
	})
}
