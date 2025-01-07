"use client" // for translations

import Hero from "@/app/components/Hero"
import { useLanguage } from "@/app/components/LanguageContext"

export default function Home() {
	const { translations } = useLanguage()

	return (
		<div className="bg-home-bg bg-cover bg-center">
			<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto h-dvh">
				<Hero translations={translations} />
			</main>
		</div>
	)
}
