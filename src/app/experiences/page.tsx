import Experiences from "../components/Experiences"
import Quote from "../components/Quote"

export const metadata = {
	title: "L'histoire",
}

export default function ExperiencesPage() {
	return (
		<main className="flex flex-col justify-center text-center max-w-7xl mx-auto">
			<Experiences />
			<Quote/>
		</main>
	)
}
