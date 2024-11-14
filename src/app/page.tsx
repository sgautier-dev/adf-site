import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { BellAlertIcon } from "@heroicons/react/24/outline"

export default function Home() {
	return (
		<div className="bg-gray-900 bg-home-bg bg-cover bg-center py-16 sm:py-24">
			<main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="relative isolate overflow-hidden bg-gray-900/80 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
						<h1 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
							Aqua Dance Flow
						</h1>
						<div className="flex items-center gap-4 mt-3">
							<ExclamationTriangleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500" />
							<h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
								Le site est en cours de construction.
							</h2>
							<ExclamationTriangleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500" />
						</div>
						<p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
							Soyez les premiers informés de notre lancement ! Laissez-nous
							votre email pour recevoir toutes les informations dès que le site
							sera en ligne.
						</p>

						<form className="mx-auto mt-10 flex max-w-md gap-x-4">
							<BellAlertIcon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 mx-auto animate-pulse" />
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								required
								placeholder="Votre email"
								autoComplete="email"
								className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
							/>
							<button
								type="submit"
								className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								M&apos;avertir
							</button>
						</form>
						<svg
							viewBox="0 0 1024 1024"
							aria-hidden="true"
							className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
						>
							<circle
								r={512}
								cx={512}
								cy={512}
								fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
								fillOpacity="0.7"
							/>
							<defs>
								<radialGradient
									r={1}
									cx={0}
									cy={0}
									id="759c1415-0410-454c-8f7c-9a820de03641"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(512 512) rotate(90) scale(512)"
								>
									<stop stopColor="#7775D6" />
									<stop offset={1} stopColor="#E935C1" stopOpacity={0} />
								</radialGradient>
							</defs>
						</svg>
					</div>
				</div>
			</main>
		</div>
	)
}
