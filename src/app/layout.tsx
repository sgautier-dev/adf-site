import type { Metadata } from "next"

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
	return <body>{children}</body>
}
