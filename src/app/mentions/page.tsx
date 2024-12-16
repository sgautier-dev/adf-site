export const metadata = {
	title: "Mentions légales",
}

export default function Legal() {
	return (
		<main className="px-6 lg:px-8 py-20 sm:py-24 mx-auto max-w-7xl min-h-screen">
			<article className="container mx-auto text-white">
				<h1 className="font-leagueSpartan text-3xl font-bold mb-4 text-orange">
					Mentions légales
				</h1>
				<p className="mb-4">
					Aqua Dance Flow (Watertales) respecte et se conforme à toutes les
					obligations légales requises pour la mise en ligne d&apos;un site
					internet. Sur cette page, vous trouverez toutes les informations
					légales concernant notre entreprise et l&apos;utilisation de notre
					site web.
				</p>
				<p className="mb-4">
					Le numéro SIRET de l&apos;entreprise Watertales est 530 472 372 00024.
				</p>
				<p className="mb-4">
					Le représentant légal de Watertales est Julie Gautier.
				</p>
				<p className="mb-4">
					Le site web d&apos;Aqua Dance Flow est hébergé par Vercel Inc., dont
					le siège social est situé 340 S Lemon Ave #4133, Walnut, CA 91789,
					USA.
				</p>
				<p className="mb-4">
					Les images présentes sur ce site sont soit la propriété exclusive de{" "}
					<a
						href="https://www.juliegautier.me/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-paleRed hover:text-paleRed/60"
					>
						Julie Gautier
					</a>{" "}
					, soit utilisées avec l’autorisation expresse de{" "}
					<a
						href="https://charlotteboiron.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-paleRed hover:text-paleRed/60"
					>
						Charlotte Boiron
					</a>{" "}
					. Toute reproduction, représentation, ou utilisation des images sans
					autorisation préalable est strictement interdite. Les visuels, textes,
					et autres contenus du site sont protégés par les lois sur la propriété
					intellectuelle. Toute utilisation non autorisée est passible de
					poursuites judiciaires.
				</p>
			</article>
		</main>
	)
}
