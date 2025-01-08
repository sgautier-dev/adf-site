"use client" // for translations

import Link from "next/link"
import Image from "next/image"
import image1 from "../../../public/images/experiences-1.jpg"
import image2 from "../../../public/images/experiences-2.png"
import image3 from "../../../public/images/experiences-3.jpg"
import image4 from "../../../public/images/experiences-4.jpg"
import image5 from "../../../public/images/experiences-5.jpg"
import { useLanguage } from "./LanguageContext"

export default function Experiences() {
	const { translations } = useLanguage()
	return (
		<div className="relative isolate bg-white">
			<svg
				aria-hidden="true"
				className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-cadetBlue/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
			>
				<defs>
					<pattern
						x="50%"
						y={-1}
						id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
						width={200}
						height={200}
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="200"
							height="200"
							rx="20"
							ry="20"
							fill="none"
						/>
					</pattern>
				</defs>
				<svg x="50%" y={-1} className="overflow-visible fill-cadetBlue/10">
					<rect
						x="-200"
						y="0"
						width="201"
						height="201"
						rx="20"
						ry="20"
						stroke="none"
					/>
					<rect
						x="600"
						y="0"
						width="201"
						height="201"
						rx="20"
						ry="20"
						stroke="none"
					/>
					<rect
						x="-400"
						y="600"
						width="201"
						height="201"
						rx="20"
						ry="20"
						stroke="none"
					/>
					<rect
						x="200"
						y="800"
						width="201"
						height="201"
						rx="20"
						ry="20"
						stroke="none"
					/>
				</svg>
				<rect
					fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
					width="100%"
					height="100%"
					strokeWidth={0}
				/>
			</svg>
			<div className="overflow-hidden">
				<div className="mx-auto max-w-screen-2xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pt-12">
					<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
							<h1 className="font-leagueSpartan text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
								{translations.experiences.title}
							</h1>
							<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
								{translations.experiences.text}
							</p>
							<div className="mt-10 flex items-center gap-x-6">
								<Link
									href="/events"
									className="rounded-md bg-cadetBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cadetBlue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cadetBlue/80"
								>
									{translations.buttons.events}
								</Link>
								{/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
									Live demo <span aria-hidden="true">→</span>
								</a> */}
							</div>
						</div>
						<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
							<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
								<div className="relative">
									<Image
										alt="expériences aqua dance flow - © Charlotte Boiron"
										src={image1}
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={700}
										height={700}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div className="relative">
									<Image
										alt="expériences aqua dance flow"
										src={image2}
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={700}
										height={700}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="relative">
									<Image
										alt="expériences aqua dance flow - © Charlotte Boiron"
										src={image4}
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={700}
										height={1050}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div className="relative">
									<Image
										alt="expériences aqua dance flow - © Charlotte Boiron"
										src={image5}
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={700}
										height={467}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="relative">
									<Image
										alt="expériences aqua dance flow - © Charlotte Boiron"
										src={image3}
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={640}
										height={960}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
