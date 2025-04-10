"use client"

import { FormEvent, useState } from "react"
import { validateEmail } from "../lib/utils"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { useLanguage } from "./LanguageContext"

export default function Newsletter() {
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [isSubmitting, setIsSubmitting] = useState(false)

	const { translations, language } = useLanguage()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setMessage("")

		if (!validateEmail(email)) {
			setMessage(translations.newsletter.invalid_email_message)
			return
		}

		setIsSubmitting(true)

		try {
			const response = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, locale: language }),
			})

			const data = await response.json()

			if (response.ok) {
				setMessage(data.message)
				setEmail("")
			} else {
				setMessage(data.message || translations.newsletter.subscription_error)
			}
		} catch (error) {
			console.error(error)
			setMessage(translations.newsletter.subscription_error)
		}

		setIsSubmitting(false)
	}
	return (
		<div className="mt-12 border-t border-gray-900/10 pt-8 sm:mt-16 lg:mt-20 lg:flex lg:items-center lg:justify-between">
			<div>
				<h3 className="text-sm/6 font-semibold text-gray-900">
					{translations.newsletter.title}
				</h3>
				<p className="mt-2 text-sm/6 text-gray-600 max-w-sm">
					{translations.newsletter.text}
				</p>
			</div>
			<div>
				<form
					onSubmit={handleSubmit}
					className="mt-6 sm:flex sm:max-w-md lg:mt-0"
				>
					<label htmlFor="email-address" className="sr-only">
						Email address
					</label>
					<input
						id="email-address"
						name="email-address"
						type="email"
						required
						placeholder={translations.newsletter.email_placeholder}
						autoComplete="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:w-56 sm:text-sm/6"
					/>
					<div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
						<button
							type="submit"
							disabled={isSubmitting}
							className="flex w-full items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
						>
							{isSubmitting ? (
								<ArrowPathIcon className="h-5 w-5 animate-spin" />
							) : (
								translations.newsletter.button
							)}
						</button>
					</div>
				</form>
				{message && (
					<p className="mt-4 text-center text-sm text-amber-500">{message}</p>
				)}
			</div>
		</div>
	)
}
