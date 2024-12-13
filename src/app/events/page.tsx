import Events from "../components/Events"

export const metadata = {
	title: "Événements",
}
export default function EventsPage() {
	return (
		<main className="flex flex-col justify-center text-center max-w-7xl mx-auto">
			<Events />
		</main>
	)
}
