"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import cressiLogo from "../../../public/images/logos/Cressi_logo.png"

import adfLogo from "../../../public/images/logos/ADF-logo.png"
import Link from "next/link"
import { getMenu } from "@/app/lib/navigation"
import LanguageSwitcher from "./LanguageSwitcher"
import { useLanguage } from "./LanguageContext"

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isAtTop, setIsAtTop] = useState(true)

	const { translations } = useLanguage()
	const menu = getMenu(translations)

	useEffect(() => {
		const handleScroll = () => {
			setIsAtTop(window.scrollY === 0)
		}

		window.addEventListener("scroll", handleScroll)

		// Clean up on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<header
			className={`sticky top-0 z-20 bg-white transition-opacity duration-300 ${
				isAtTop ? "" : "bg-opacity-90"
			}`}
		>
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-screen-2xl items-center justify-between p-3 lg:px-8"
			>
				<div className="flex flex-1">
					<div className="hidden lg:flex lg:gap-x-12">
						{menu.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm/6 font-semibold text-black hover:scale-110 transition"
							>
								{item.name}
							</Link>
						))}
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>
					</div>
				</div>
				<Link href="/" className="-m-1.5 p-1.5">
					<span className="sr-only">Aqua Dance Flow</span>
					<Image
						alt="aqua dance flow logo"
						src={adfLogo}
						className="h-20 w-auto"
					/>
				</Link>
				<div className="flex  flex-1 gap-y-3 gap-x-8 sm:gap-x-12 items-center justify-end">
					<a
						href="https://store.cressi.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="-m-1.5 p-1.5"
					>
						<span className="sr-only">Cressi</span>
						<Image
							alt="aqua dance flow logo"
							src={cressiLogo}
							className="h-10 lg:h-12 w-auto"
						/>
					</a>
					<LanguageSwitcher />
					<Link
						href="/events"
						className="hidden lg:flex text-sm/6 font-semibold text-black hover:scale-110 transition"
					>
						{translations.navigation.events}{" "}
						<span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-20" />
				<DialogPanel className="fixed inset-y-0 left-0 z-20 w-full overflow-y-auto bg-white p-3 lg:px-8 animate-slide">
					<div className="flex items-center justify-between">
						<div className="flex flex-1">
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-black"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
							</button>
						</div>
						<Link
							href="/"
							className="-m-1.5 p-1.5"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Aqua Dance Flow</span>
							<Image
								alt="aqua dance flow logo"
								src={adfLogo}
								className="h-20 w-auto"
							/>
						</Link>
						<div className="flex flex-1 justify-end">
							<Link
								href="/events"
								className="text-sm/6 font-semibold text-black hover:scale-110 transition"
								onClick={() => setMobileMenuOpen(false)}
							>
								{translations.navigation.events}{" "}
								<span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</div>
					<div className="mt-6 space-y-2">
						{menu.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-gray-50"
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}
