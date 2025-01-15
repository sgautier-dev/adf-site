import type { Metadata } from "next"
import { LanguageProvider } from "@/app/components/LanguageContext"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import "./globals.css"
import { Quicksand, League_Spartan } from "next/font/google" 

const quicksand = Quicksand({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-quicksand",
})

const leagueSpartan = League_Spartan({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-leagueSpartan",
})

export const metadata: Metadata = {
	title: {
		template: "%s - Aqua Dance Flow by Julie Gautier",
		default: "Aqua Dance Flow by Julie Gautier",
	},
	description:
		"L'Aqua Dance Flow, danse aquatique, est une discipline à la croisée de l’Art et du Sport.",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr">
			<body
				className={`${quicksand.variable} ${leagueSpartan.variable} antialiased bg-white mx-auto w-full max-w-screen-2xl font-quicksand`}
			>
				<LanguageProvider>
					<Header />
					{children}
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	)
}
