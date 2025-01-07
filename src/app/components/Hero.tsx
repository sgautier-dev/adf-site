import Link from "next/link"
import { Translations } from "@/app/lib/translations"

export default function Hero({ translations }: { translations: Translations }) {
	return (
		<div className="mx-auto sm:px-6 lg:px-8">
			<div className="relative isolate overflow-hidden bg-gray-900/80 px-3 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 animate-translate">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-300 ring-2 ring-paleRed hover:ring-paleRed/30">
						{translations.hero.banner}{" "}
						<a
							href="https://www.salon-de-la-plongee.com/fr/animations/fiche-animations/2051/3714.html"
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold text-white"
						>
							<span aria-hidden="true" className="absolute inset-0" />
							{translations.buttons.more} <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="font-leagueSpartan text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
						Aqua Dance Flow
					</h1>
					<p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8 max-w-2xl">
						{translations.hero.text}
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/experiences"
							className="rounded-md bg-cadetBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cadetBlue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cadetBlue/80"
						>
							{translations.buttons.initiation}
						</Link>
						<Link
							href="/story"
							className="text-sm/6 font-semibold text-white hover:scale-110 transition"
						>
							{translations.links.story} <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
