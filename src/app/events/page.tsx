import Events from "../components/Events"
import { fetchEvents } from "../lib/fetchEvents"

export const metadata = {
	title: "Événements",
}

export const dynamic = "force-static"

export default async function EventsPage() {
	try {
		const events = await fetchEvents()

		return (
			<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto">
				<Events events={events} />
			</main>
		)
	} catch (error) {
		console.error("Error loading events:", error)
		throw error // Let Next.js handle the error with `error.tsx`
	}
}
