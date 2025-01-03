import Hero from "@/app/components/Hero"
import { getTranslations } from "@/app/lib/getTranslations"

export default async function Home() {
	const messages = await getTranslations("fr") // Fetch French translations

	return (
		<div className="bg-home-bg bg-cover bg-center">
			<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto h-dvh">
				<Hero translations={messages.default} />
			</main>
		</div>
	)
}
