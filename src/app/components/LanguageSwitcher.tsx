"use client"
import { useLanguage } from "@/app/components/LanguageContext"

export default function LanguageSwitcher() {
	const { language, switchLanguage } = useLanguage()

	return (
		<button
			type="button"
			onClick={() => switchLanguage(language === "fr" ? "en" : "fr")}
			className="rounded-full bg-cadetBlue p-1.5 text-white shadow-sm hover:bg-cadetBlue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cadetBlue text-sm lg:text-base"
			aria-label={
				language === "fr" ? "Switch to English" : "Passer en français"
			}
			aria-live="polite"
		>
			{language === "fr" ? "EN" : "FR"}
		</button>
	)
}
