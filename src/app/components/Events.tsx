import Image from "next/image"
import fallback from "../../../public/images/fallback.png"

export default function Events({ events }: { events: ReturnedEvent[] }) {
	return (
		<div className="overflow-hidden bg-white">
			<div className="mx-auto max-w-screen-2xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pt-12">
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
							<div className="max-w-xl">
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
								<div className="group relative hover:bg-gray-100 rounded-2xl">
									<h3 className="mt-3 text-base/6 font-semibold text-gray-900">
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
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}
