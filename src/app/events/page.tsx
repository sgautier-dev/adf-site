import Events from "../components/Events"

export const metadata = {
	title: "Événements",
}
export default async function EventsPage() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/events`)
	const events = await res.json()

	return (
		<main className="flex flex-col justify-center text-center max-w-7xl mx-auto">
			<Events events={events} />
		</main>
	)
}
