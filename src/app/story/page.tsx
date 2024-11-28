import Story from "../components/Story"

export const metadata = {
	title: "L'histoire",
}

export default function StoryPage() {
	return (
		<main className="flex flex-col justify-center text-center max-w-7xl mx-auto">
			<Story />
		</main>
	)
}
