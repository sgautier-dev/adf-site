"use client"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import Image from "next/image"
import sendEmail from "@/app/actions/sendEmail"
import { useAction } from "next-safe-action/hooks"
import { DisplayServerActionResponse } from "./DisplayServerActionResponse"
import contact from "../../../public/images/contact.png"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { useLanguage } from "./LanguageContext"

export default function Contact() {
	const { translations, language } = useLanguage()

	const [formData, setFormData] = useState({
		locale: language,
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	})
	const formRef = useRef<HTMLFormElement>(null)
	const { execute, result, isExecuting } = useAction(sendEmail)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		execute(formData)
	}

	useEffect(() => {
		if (!isExecuting && result.data?.message) {
			if (formRef.current) {
				formRef.current.reset() // Reset form if success
			}
			setFormData({
				locale: language,
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				message: "",
			})
		}
	}, [isExecuting, result, language])

	useEffect(() => {
		setFormData((prevData) => ({
			...prevData,
			locale: language, // ✅ Ensure locale is always in sync with selected language
		}))
	}, [language])

	return (
		<div className="relative bg-white">
			<div className="lg:absolute lg:inset-0 lg:left-1/2">
				<Image
					alt="expériences aqua dance flow"
					src={contact}
					className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
					priority
				/>
			</div>
			<div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-screen-2xl lg:grid-cols-2 lg:pt-32 text-left">
				<div className="px-6 lg:px-8">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<h2 className="font-leagueSpartan text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
							{translations.contact.title}
						</h2>
						<p className="mt-2 text-lg/8 text-gray-600">
							{translations.contact.text}
						</p>
						<form ref={formRef} onSubmit={handleSubmit} className="mt-16">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm/6 font-semibold text-gray-900"
									>
										{translations.form.first_name}
									</label>
									<div className="mt-2.5">
										<input
											id="firstName"
											name="firstName"
											type="text"
											autoComplete="given-name"
											value={formData.firstName}
											onChange={handleChange}
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cadetBlue"
											required
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="block text-sm/6 font-semibold text-gray-900"
									>
										{translations.form.last_name}
									</label>
									<div className="mt-2.5">
										<input
											id="lastName"
											name="lastName"
											type="text"
											autoComplete="family-name"
											value={formData.lastName}
											onChange={handleChange}
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cadetBlue"
											required
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="email"
										className="block text-sm/6 font-semibold text-gray-900"
									>
										Email
									</label>
									<div className="mt-2.5">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											value={formData.email}
											onChange={handleChange}
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cadetBlue"
											required
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<div className="flex justify-between text-sm/6">
										<label
											htmlFor="phone"
											className="block font-semibold text-gray-900"
										>
											{translations.form.phone}
										</label>
										<p id="phone-description" className="text-gray-400">
											{translations.form.optional}
										</p>
									</div>
									<div className="mt-2.5">
										<input
											id="phone"
											name="phone"
											type="tel"
											autoComplete="tel"
											value={formData.phone}
											onChange={handleChange}
											aria-describedby="phone-description"
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cadetBlue"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<div className="flex justify-between text-sm/6">
										<label
											htmlFor="message"
											className="block text-sm/6 font-semibold text-gray-900"
										>
											{translations.form.message}
										</label>
										<p id="message-description" className="text-gray-400">
											{translations.form.message_description}
										</p>
									</div>
									<div className="mt-2.5">
										<textarea
											id="message"
											name="message"
											rows={4}
											aria-describedby="message-description"
											value={formData.message}
											onChange={handleChange}
											className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cadetBlue"
											required
										/>
									</div>
								</div>
							</div>
							<div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
								<button
									type="submit"
									className="rounded-md bg-cadetBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cadetBlue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cadetBlue"
								>
									{isExecuting ? (
										<ArrowPathIcon className="h-5 w-5 animate-spin" />
									) : (
										translations.form.button
									)}
								</button>
							</div>
						</form>
						<DisplayServerActionResponse result={result} />
					</div>
				</div>
			</div>
		</div>
	)
}
