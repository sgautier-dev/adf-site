import Hero from "@/app/components/Hero"

export default function Home() {
	return (
		<div className="bg-home-bg bg-cover bg-center">
			<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto h-dvh">
				<Hero />
			</main>
		</div>
	)
}
