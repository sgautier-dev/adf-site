import Events from "../components/Events"

export const metadata = {
	title: "Événements",
}

export default async function EventsPage() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/events`, {
			cache: "force-cache", // Cache the response
		})

		if (!res.ok) {
			throw new Error(`Failed to fetch events: ${res.statusText}`)
		}

		const events: ReturnedEvent[] = await res.json()

		return (
			<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto">
				<Events events={events} />
			</main>
		)
	} catch (error) {
		console.error("Error loading events:", error)
		throw error
	}
}
