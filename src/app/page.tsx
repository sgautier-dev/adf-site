import Script from "next/script"
// import UnderConstruct from "./components/UnderConstruct"
import Hero from "./components/Hero"

export default function Home() {
	return (
		<div className="bg-gray-900 bg-home-bg bg-cover bg-center">
			<main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
				{/* <UnderConstruct /> */}
				<Hero />
			</main>
			<Script
				src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
			/>
		</div>
	)
}
