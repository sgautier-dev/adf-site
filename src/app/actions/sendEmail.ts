"use server"
import React from "react"
import { EmailTemplate } from "@/app/components/EmailTemplate"
import { Resend } from "resend"
import { z } from "zod"
import { actionClient } from "../lib/safe-action"
import { flattenValidationErrors } from "next-safe-action"
import { checkArcJetProtection } from "@/app/lib/arcjet-protection"
import { getTranslations } from "@/app/lib/getTranslations"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
	locale: z.string().default("fr"),
	firstName: z.string().min(1, { message: "Le prénom est requis." }),
	lastName: z.string().min(1, { message: "Le nom de famille est requis." }),
	email: z.string().email({ message: "Adresse e-mail invalide." }),
	phone: z.string().optional(),
	message: z.string().min(1, { message: "Le message est requis." }),
})

const sendEmail = actionClient
	.schema(schema, {
		handleValidationErrorsShape: async (ve) =>
			flattenValidationErrors(ve).fieldErrors,
	})
	.action(
		async ({
			parsedInput: { locale, firstName, lastName, email, phone, message },
		}) => {
			// throw new Error ('test')

			await checkArcJetProtection()

			await resend.emails.send({
				from: "ADF Contact <contact@aquadanceflow.com>",
				to: ["contact@aquadanceflow.com"],
				replyTo: email as string,
				subject: `Message de ${firstName} ${lastName}`,
				react: React.createElement(EmailTemplate, {
					firstName: firstName as string,
					lastName: lastName as string,
					senderEmail: email as string,
					phone: phone as string,
					message: message as string,
				}),
			})

			const translations = await getTranslations(locale)

			return {
				message: translations.server_messages.email_sent,
			}
		}
	)

export default sendEmail
