import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "Aqua Dance Flow by Julie Gautier",
	description:
		"L'Aqua Dance Flow, danse aquatique, est une discipline à la croisée de l’Art et du Sport.",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 mx-auto w-full max-w-7xl`}
			>
				<div className="lg:px-4">{children}</div>
			</body>
		</html>
	)
}
