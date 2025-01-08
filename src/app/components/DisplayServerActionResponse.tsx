import Notification from "./Notification"
import { useState, useEffect } from "react"
import { useLanguage } from "@/app/components/LanguageContext" // ✅ Import language context

type Props = {
	result: {
		data?: {
			message?: string
		}
		serverError?: string
		fetchError?: string
		validationErrors?: Record<string, string[] | undefined> | undefined
	}
}

export function DisplayServerActionResponse({ result }: Props) {
	const { data, serverError, fetchError, validationErrors } = result
	const { translations } = useLanguage()

	const [showSuccess, setShowSuccess] = useState(!!data?.message)
	const [showServerError, setShowServerError] = useState(!!serverError)
	const [showFetchError, setShowFetchError] = useState(!!fetchError)
	const [showValidationErrors, setShowValidationErrors] = useState(true) // Show if we have any

	useEffect(() => {
		setShowSuccess(!!data?.message)
	}, [data])

	useEffect(() => {
		setShowServerError(!!serverError)
	}, [serverError])

	useEffect(() => {
		setShowFetchError(!!fetchError)
	}, [fetchError])

	useEffect(() => {
		setShowValidationErrors(
			!!validationErrors && Object.keys(validationErrors).length > 0
		)
	}, [validationErrors])

	return (
		<>
			{data?.message && (
				<Notification
					show={showSuccess}
					onClose={() => setShowSuccess(false)}
					title={translations.notifications.success_title}
					message={data.message}
					variant="success"
				/>
			)}

			{serverError && (
				<Notification
					show={showServerError}
					onClose={() => setShowServerError(false)}
					title={translations.notifications.server_error_title}
					message={translations.notifications.server_error_message}
					variant="error"
				/>
			)}

			{fetchError && (
				<Notification
					show={showFetchError}
					onClose={() => setShowFetchError(false)}
					title={translations.notifications.fetch_error_title}
					message={translations.notifications.fetch_error_message}
					variant="error"
				/>
			)}

			{validationErrors &&
				showValidationErrors &&
				Object.keys(validationErrors).map((key) => {
					const errors = validationErrors[key]
					return (
						<Notification
							key={key}
							show={true}
							onClose={() => {
								setShowValidationErrors(false)
							}}
							title={translations.notifications.validation_error_title}
							message={`${key}: ${errors?.join(", ")}`}
							variant="error"
						/>
					)
				})}
		</>
	)
}
