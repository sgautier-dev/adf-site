import Hero from "@/app/components/Hero"
import Image from "next/image"
import homeBg from "../../public/images/home-bg.png"
export default function Home() {
	return (
		<main className="relative flex flex-col justify-center text-center max-w-screen-2xl mx-auto h-dvh">
			<Image
				alt="aqua dance flow logo"
				src={homeBg}
				className="absolute inset-0 -z-10 size-full object-cover"
				priority
			/>
			<Hero />
		</main>
	)
}
