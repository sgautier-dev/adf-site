import Events from "../components/Events"
import { fetchEvents } from "../lib/fetchEvents"

export const metadata = {
	title: "Événements",
}

export const dynamic = "force-static"

const y40Event = {
	id: "y40",
	name: "Workshop at Y-40",
	summary:
		"Experience Aqua Dance Flow in the world's deepest pool with Julie Gautier.",
	date: "8-9 mars 2025",
	isoDate: "2025-03-08T14:00:00Z",
	imageUrl: "/images/home-bg.png",
	url: "https://www.y-40.com/en/aqua-dance-flow-julie-gautier-2/",
	isSoldOut: false,
	city: "Padoue, Italy",
}

export default async function EventsPage() {
	try {
		const events = await fetchEvents()

		// Combine and sort events
		const combinedEvents = [...events, y40Event].sort((a, b) => {
			const dateA = new Date(a.isoDate).getTime()
			const dateB = new Date(b.isoDate).getTime()
			return dateA - dateB
		})

		return (
			<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto">
				<Events events={combinedEvents} />
			</main>
		)
	} catch (error) {
		console.error("Error loading events:", error)
		throw error // Let Next.js handle the error with `error.tsx`
	}
}
