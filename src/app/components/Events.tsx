"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import fallback from "../../../public/images/fallback.png"
import { ArrowPathIcon } from "@heroicons/react/24/outline"

// {
//     id: '1113426652089',
//     name: 'AQUA DANCE FLOW - INITIATIONS',
//     summary: "Découvrez l'ADF avec Julie Gautier au Salon de la Plongée : libérez vos tensions et explorez le plaisir du mouvement en apesanteur.",
//     date: '11 janvier 2025, 12h00 - 13h00',
//     picture: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F916829683%2F2540367301401%2F1%2Foriginal.20241213-064717?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C180%2C2160%2C1080&s=abf381611494b40637113e776fa26f9a',
//     url: 'https://www.eventbrite.fr/e/billets-aqua-dance-flow-initiations-1113426652089',
//     bookingInfo: 'Places disponibles'
//   }

export default function Events() {
	const [events, setEvents] = useState<ReturnedEvent[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchEvents() {
			const res = await fetch("/api/events")
			const data = await res.json()
			setEvents(data)
			setLoading(false)
		}

		fetchEvents()
	}, [])

	if (loading) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-white">
				<ArrowPathIcon className="h-20 w-20 animate-spin text-cadetBlue" />
			</div>
		)
	}
	return (
		<div className="overflow-hidden bg-white">
			<div className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pt-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-leagueSpartan text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Nos Prochains Événements
					</h2>
					<p className="mt-2 text-lg/8 text-gray-600">
						Découvrez les prochaines initiations et ateliers Aqua Dance Flow.
						Chaque session est une invitation à explorer votre potentiel
						aquatique dans un univers d&apos;apesanteur et de créativité.
						Réservez dès maintenant votre place pour vivre une expérience unique
						avec Julie Gautier.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{events.map((event) => (
						<article
							key={event.id}
							className="flex flex-col items-start justify-between"
						>
							<div className="relative w-full">
								<Image
									alt="Événements aqua dance flow"
									src={event.imageUrl ?? fallback}
									className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
									width={700}
									height={700}
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>
							<div className="max-w-xl">
								<div className="mt-8 flex items-center gap-x-4 text-xs">
									<time
										dateTime={event.date}
										className="text-cadetBlue font-semibold"
									>
										{event.date}
									</time>
									<div
										className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${
											event.isSoldOut
												? "bg-red-100 text-red-800"
												: "bg-gray-50 text-gray-600"
										}`}
									>
										{event.isSoldOut ? "Complet" : "Places disponibles"}
									</div>

									{/* <a
										href={event.category.href}
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
									>
										{event.category.title}
									</a> */}
								</div>
								<div className="group relative hover:bg-gray-100 rounded-2xl">
									<h3 className="mt-3 text-lg/6 font-semibold text-gray-900">
										{event.isSoldOut ? (
											<span>{event.name}</span>
										) : (
											<a
												href={event.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												<span className="absolute inset-0" />
												{event.name}
											</a>
										)}
									</h3>
									<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
										{event.summary}
									</p>
								</div>

								{/* <div className="relative mt-8 flex items-center gap-x-4">
									<img
										alt=""
										src={event.author.imageUrl}
										className="size-10 rounded-full bg-gray-100"
									/>
									<div className="text-sm/6">
										<p className="font-semibold text-gray-900">
											<a href={event.author.href}>
												<span className="absolute inset-0" />
												{event.author.name}
											</a>
										</p>
										<p className="text-gray-600">{event.author.role}</p>
									</div>
								</div> */}
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}
