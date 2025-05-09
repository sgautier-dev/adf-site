"use client" // for translations

import Image from "next/image"
import storyImg from "../../../public/images/story.png"
import Link from "next/link"
import { useLanguage } from "./LanguageContext"
export default function Story() {
	const { translations } = useLanguage()
	return (
		<div className="relative bg-white">
			<div className="mx-auto max-w-screen-2xl">
				<div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
					<svg
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
						className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
					>
						<polygon points="0,0 90,0 50,100 0,100" />
					</svg>

					<div className="relative px-6 py-12 sm:py-24 lg:px-8 lg:py-32 lg:pr-0">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
							<h1 className="font-leagueSpartan text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
								{translations.story.title}
							</h1>
							<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
								{translations.story.text}
							</p>
							<div className="mt-10 flex items-center gap-x-6">
								<Link
									href="/experiences"
									className="rounded-md bg-cadetBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cadetBlue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cadetBlue/80"
								>
									{translations.buttons.initiation}
								</Link>
								<a
									href="https://youtu.be/EdDupIIjyjE?si=SIzeIPVSQ4_hLj0Z"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm/6 font-semibold text-gray-900"
								>
									{translations.links.ama} <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center pb-14 lg:pb-0">
				<Image
					alt="story julie gautier aqua dance flow"
					src={storyImg}
					className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
					priority
				/>
			</div>
		</div>
	)
}
