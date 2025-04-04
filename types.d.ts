interface Window {
	grecaptcha: ReCaptchaInstance
}

interface ReturnedEvent {
	id: string
	name: string
	summary: string
	startDate: string
	endDate: string
	imageUrl: string | null
	url: string
	isSoldOut: boolean
	city: string
	highlighted?: boolean
	banner?: string
	banner_sm?: string
}
