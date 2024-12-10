import Notification from "./Notification" // Adjust path
import { useState, useEffect } from "react"

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

	const [showSuccess, setShowSuccess] = useState(!!data?.message)
	const [showServerError, setShowServerError] = useState(!!serverError)
	const [showFetchError, setShowFetchError] = useState(!!fetchError)
	const [showValidationErrors, setShowValidationErrors] = useState(true) // show if we have any

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
					title="Succès !"
					message={data.message}
					variant="success"
				/>
			)}

			{serverError && (
				<Notification
					show={showServerError}
					onClose={() => setShowServerError(false)}
					title="Erreur serveur"
					message={`Veuillez réessayer plus tard. (${serverError})`}
					variant="error"
				/>
			)}

			{fetchError && (
				<Notification
					show={showFetchError}
					onClose={() => setShowFetchError(false)}
					title="Erreur réseau"
					message={`Vérifiez votre connexion. (${fetchError})`}
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
								// For now, just hide them all.
								setShowValidationErrors(false)
							}}
							title="Erreur de validation"
							message={`${key}: ${errors?.join(", ")}`}
							variant="error"
						/>
					)
				})}
		</>
	)
}
