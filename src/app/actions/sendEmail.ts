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
	contact_info: z.string().optional(),
})

const sendEmail = actionClient
	.schema(schema, {
		handleValidationErrorsShape: async (ve) =>
			flattenValidationErrors(ve).fieldErrors,
	})
	.action(
		async ({
			parsedInput: {
				locale,
				firstName,
				lastName,
				email,
				phone,
				message,
				contact_info,
			},
		}) => {
			//throw new Error ('test')

			if (contact_info && contact_info.trim() !== "") {
				throw new Error("Bot detected (honeypot).")
			}

			await checkArcJetProtection()

			const { error } = await resend.emails.send({
				from: "ADF Contact <contact@aquadanceflow.com>",
				to: ["contact@aquadanceflow.com"],
				replyTo: email,
				subject: `ADF - Message de ${firstName} ${lastName}`,
				text: `Nouveau message depuis le formulaire ADF

Prénom : ${firstName}
Nom : ${lastName}
Email : ${email}
Téléphone : ${phone || "-"}
Message :
${message}
`,
				react: React.createElement(EmailTemplate, {
					firstName,
					lastName,
					senderEmail: email,
					phone: phone || "",
					message,
				}),
			})

			if (error) {
				console.error("Resend error:", error)
				throw new Error(error.message || "Erreur lors de l'envoi de l'email")
			}

			// console.log("Resend success:", data)

			const translations = await getTranslations(locale)

			return {
				message: translations.server_messages.email_sent,
			}
		},
	)

export default sendEmail
