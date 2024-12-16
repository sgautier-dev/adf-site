import { NextResponse } from "next/server"

function formatEventDateTime(startISO: string, endISO: string): string {
	const startDate = new Date(startISO)
	const endDate = new Date(endISO)

	const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
		day: "numeric",
		month: "long",
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

	return (
		dateStr.charAt(0).toUpperCase() +
		dateStr.slice(1) +
		`, ${startTimeStr} - ${endTimeStr}`
	)
}

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

function constructEventbriteUrl(organizationId: string): string {
	return `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/?expand=logo,venue,ticket_availability`
}

export async function GET() {
	const token = process.env.EVENTBRITE_TOKEN
	const organizationId = process.env.EVENTBRITE_ORG_ID

	if (!token || !organizationId) {
		return NextResponse.json(
			{
				error:
					"Missing required environment variables: EVENTBRITE_TOKEN or EVENTBRITE_ORG_ID.",
			},
			{ status: 500 }
		)
	}

	const url = constructEventbriteUrl(organizationId)

	try {
		//throw new Error("Test in events route")

		const res = await fetch(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		if (!res.ok) {
			const errorText = await res.text()
			console.error(`Eventbrite API Error: ${errorText}`)
			return NextResponse.json(
				{
					error: `Failed to fetch events from Eventbrite.`,
					details: errorText,
				},
				{ status: res.status }
			)
		}

		const data = await res.json()

		if (!data.events || !Array.isArray(data.events)) {
			return NextResponse.json(
				{
					error: "Invalid response format from Eventbrite API.",
				},
				{ status: 500 }
			)
		}

		const events: ReturnedEvent[] = data.events.map(
			(event: EventbriteEvent) => {
				const name = event.name?.text || "Nom non spécifié"
				const summary =
					event.description?.text || "Pas de description disponible."
				const startLocal = event.start?.local || ""
				const endLocal = event.end?.local || ""
				const formattedDate =
					startLocal && endLocal
						? formatEventDateTime(startLocal, endLocal)
						: ""
				const isSoldOut = event.ticket_availability?.is_sold_out
				const city = event.venue?.address?.city || "Lieu non spécifié"

				return {
					id: event.id,
					name,
					summary,
					date: formattedDate,
					imageUrl: event.logo?.url || null,
					url: event.url || "",
					isSoldOut,
					city,
				}
			}
		)

		return NextResponse.json(events)
	} catch (error) {
		console.error("Unexpected error in events route:", error)

		return NextResponse.json(
			{
				error: "An unexpected error occurred while fetching events.",
				details: error instanceof Error ? error.message : String(error),
			},
			{ status: 500 }
		)
	}
}
