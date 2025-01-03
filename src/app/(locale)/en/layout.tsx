import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import "../../globals.css" // ✅ Import global styles
import { Quicksand, League_Spartan } from "next/font/google" // ✅ Import fonts

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

export default function EnglishLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${quicksand.variable} ${leagueSpartan.variable} antialiased bg-white mx-auto w-full max-w-screen-2xl`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
