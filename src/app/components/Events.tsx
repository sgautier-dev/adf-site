"use client" // for translations

import Image from "next/image"
import fallback from "../../../public/images/fallback.png"
import { useLanguage } from "@/app/components/LanguageContext"
import { getY40Event } from "@/app/lib/getY40Event"

export default function Events({
	fetchedEvents,
}: {
	fetchedEvents: ReturnedEvent[]
}) {
	const { translations } = useLanguage()
	const y40Event = getY40Event(translations)

	const events: ReturnedEvent[] = [...fetchedEvents, y40Event].sort((a, b) => {
		const dateA = new Date(a.isoDate).getTime()
		const dateB = new Date(b.isoDate).getTime()
		return dateA - dateB
	})

	return (
		<div className="overflow-hidden bg-white">
			<div className="mx-auto max-w-screen-2xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pt-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-leagueSpartan text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						{translations.events.title}
					</h2>
					<p className="mt-2 text-lg/8 text-gray-600">
						{translations.events.text}
					</p>
				</div>

				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{events.map((event) => (
						<a
							key={event.id}
							href={event.isSoldOut ? undefined : event.url} // ❌ No link if sold out
							target={event.isSoldOut ? undefined : "_blank"}
							rel={event.isSoldOut ? undefined : "noopener noreferrer"}
							aria-disabled={event.isSoldOut} // ✅ Mark as disabled for accessibility
							className={`group relative flex flex-col items-start justify-between rounded-2xl transition ${
								event.isSoldOut
									? "cursor-not-allowed opacity-60"
									: "hover:bg-gray-100"
							} `}
						>
							<div className="relative w-full">
								{/* Event Image */}
								<Image
									alt="Événements aqua dance flow"
									src={event.imageUrl ?? fallback}
									className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
									width={700}
									height={700}
								/>

								{/* Sold Out Sticker */}
								{event.isSoldOut && (
									<div className="absolute top-3 right-3 z-10 rounded-full bg-paleRed px-3 py-1.5 font-medium text-white">
										Complet
									</div>
								)}

								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>

							{/* Event Details */}
							<div className="max-w-xl pb-6">
								<div className="mt-8 flex items-center gap-x-4 text-lg">
									{/* Event Date */}
									<time
										dateTime={event.date}
										className="text-cadetBlue font-semibold"
									>
										{event.date}
									</time>

									{/* Event City */}
									<div className="relative uppercase z-10 rounded-full bg-gray-50 px-3 py-1.5 font-semibold text-gray-600">
										{event.city}
									</div>
								</div>

								{/* Event Name and Summary */}
								<h3 className="mt-3 text-lg/6 font-semibold text-gray-900">
									{event.name}
								</h3>
								<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
									{event.summary}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
