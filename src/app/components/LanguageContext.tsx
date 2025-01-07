"use client"
import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react"
import fr from "@/locales/fr.json"
import en from "@/locales/en.json"

/**
 * 1️⃣ Define the Language Context Type
 */
type LanguageContextType = {
	language: "fr" | "en"
	translations: typeof fr
	switchLanguage: (lang: "fr" | "en") => void
}

/**
 * 2️⃣ Create the Language Context
 */
const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

/**
 * 3️⃣ Language Provider: Manages State & LocalStorage
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<"fr" | "en">("fr")

	// ✅ Load language from localStorage when component mounts
	useEffect(() => {
		const savedLanguage = localStorage.getItem("language")
		if (savedLanguage === "fr" || savedLanguage === "en") {
			setLanguage(savedLanguage)
		}
	}, [])

	// ✅ Function to switch languages and save to localStorage
	const switchLanguage = (lang: "fr" | "en") => {
		setLanguage(lang)
		localStorage.setItem("language", lang) // Save to localStorage
	}

	return (
		<LanguageContext.Provider
			value={{
				language,
				translations: language === "fr" ? fr : en,
				switchLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	)
}

/**
 * 4️⃣ Hook to Use the Language Context
 */
export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return context
}
