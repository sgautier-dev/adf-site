export default function Hero() {
	return (
		<div className="mx-auto sm:px-6 lg:px-8">
			<div className="relative isolate overflow-hidden bg-gray-900/80 px-3 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
						Julie Gautier s&apos;associe à la marque Cressi pour lancer ADF.{" "}
						<a href="#" className="font-semibold text-white">
							<span aria-hidden="true" className="absolute inset-0" />
							En savoir plus <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
						Aqua Dance Flow
					</h1>
					<p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
						Courir, sauter, voler, danser sous l&apos;eau. Une nouvelle manière
						de pratiquer l&apos;apnée.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
						>
							Participer à une initiation
						</a>
						<a href="#" className="text-sm/6 font-semibold text-white">
							L&apos;histoire <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
