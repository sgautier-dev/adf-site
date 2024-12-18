import Quote from "../components/Quote"
import Story from "../components/Story"

export const metadata = {
	title: "L'histoire",
}

export default function StoryPage() {
	return (
		<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto">
			<Story />
			<Quote />
		</main>
	)
}
