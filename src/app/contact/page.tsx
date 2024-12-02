import Contact from "../components/Contact"

export const metadata = {
	title: "Contact",
}

export default function ContactPage() {
	return (
		<main className="flex flex-col justify-center text-center max-w-7xl mx-auto">
			<Contact />
		</main>
	)
}
