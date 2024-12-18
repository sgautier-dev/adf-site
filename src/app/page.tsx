// import UnderConstruct from "./components/UnderConstruct"
import Hero from "./components/Hero"

export default function Home() {
	return (
		<div className="bg-home-bg bg-cover bg-center">
			<main className="flex flex-col justify-center text-center max-w-screen-2xl mx-auto h-dvh">
				{/* <UnderConstruct /> */}
				<Hero />
			</main>
		</div>
	)
}
