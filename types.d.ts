interface Window {
	grecaptcha: ReCaptchaInstance
}

interface ReturnedEvent {
	id: string
	name: string
	summary: string
	date: string
	isoDate: string
	imageUrl: string | null
	url: string
	isSoldOut: boolean
	city: string
}
