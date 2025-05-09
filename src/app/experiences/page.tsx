import Experiences from "../components/Experiences"
import Quote from "../components/Quote"

export const metadata = {
	title: "Expériences",
}

export default function ExperiencesPage() {
	return (
		<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto">
			<Experiences />
			<Quote />
		</main>
	)
}
