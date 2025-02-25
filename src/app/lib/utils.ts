export const validateEmail = (email: string) => {
	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
	return emailRegex.test(email)
}

export function getRecaptchaVerificationUrl(token: string): string {
	const params = new URLSearchParams()
	params.append("secret", process.env.RECAPTCHA_SECRET_KEY!)
	params.append("response", token)

	return `https://www.google.com/recaptcha/api/siteverify?${params.toString()}`
}

export function formatEventDate(
	startDate: string,
	endDate: string,
	locale: string
): string {
	// Validate date format using regex (YYYY-MM-DD)
	const dateRegex = /^\d{4}-\d{2}-\d{2}$/
	if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
		console.error("formatEventDate Error: Invalid date format")
		return "Date inconnue" // Fallback
	}

	// Convert valid strings to Date objects
	const start = new Date(startDate)
	const end = new Date(endDate)

	// Define formatters
	const dayFormatter = new Intl.DateTimeFormat(locale, { day: "numeric" })
	const monthYearFormatter = new Intl.DateTimeFormat(locale, {
		month: "short",
		year: "numeric",
	})
	const fullFormatter = new Intl.DateTimeFormat(locale, {
		day: "numeric",
		month: "short",
		year: "numeric",
	})

	// If the event lasts only one day, return full formatted date
	if (start.getTime() === end.getTime()) {
		return fullFormatter.format(start)
	}

	// If the event is in the same month and year, return "8-9 mars 2025"
	if (
		start.getMonth() === end.getMonth() &&
		start.getFullYear() === end.getFullYear()
	) {
		return `${dayFormatter.format(start)}-${dayFormatter.format(
			end
		)} ${monthYearFormatter.format(end)}`
	}

	// Otherwise, return full formatted dates (e.g., "8 mars 2025 - 9 avril 2025")
	return `${fullFormatter.format(start)} - ${fullFormatter.format(end)}`
}
