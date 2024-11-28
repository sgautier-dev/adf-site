// import UnderConstruct from "./components/UnderConstruct"
import Hero from "./components/Hero"

export default function Home() {
	return (
		<div className="bg-gray-900 bg-home-bg bg-cover bg-center">
			<main className="font-quicksand flex flex-col justify-center text-center max-w-7xl mx-auto h-dvh">
				{/* <UnderConstruct /> */}
				<Hero />
			</main>
		</div>
	)
}
