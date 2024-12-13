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
}

export async function GET() {
	const token = process.env.EVENTBRITE_TOKEN
	const organizationId = process.env.EVENTBRITE_ORG_ID

	if (!token || !organizationId) {
		return NextResponse.json(
			{ error: "Missing EVENTBRITE_TOKEN or EVENTBRITE_ORG_ID." },
			{ status: 500 }
		)
	}

	const url = `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/?expand=logo,ticket_availability`

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	if (!res.ok) {
		const errorText = await res.text()
		return NextResponse.json(
			{ error: `Failed to fetch events: ${errorText}` },
			{ status: res.status }
		)
	}

	const data = await res.json()

	const events: ReturnedEvent[] = (data.events || []).map((event: EventbriteEvent) => {
		const name = event.name?.text || ""
		const summary = event.description?.text || ""
		const startLocal = event.start?.local || ""
		const endLocal = event.end?.local || ""
		const formattedDate =
			startLocal && endLocal ? formatEventDateTime(startLocal, endLocal) : ""

		const isSoldOut = event.ticket_availability?.is_sold_out
		// const bookingInfo = isSoldOut ? "Complet" : "Places disponibles"

		return {
			id: event.id,
			name,
			summary,
			date: formattedDate,
			imageUrl: event.logo?.url || null,
			url: event.url || "",
			isSoldOut,
		}
	})
    // console.log("events: ", events)
	return NextResponse.json(events)
}
