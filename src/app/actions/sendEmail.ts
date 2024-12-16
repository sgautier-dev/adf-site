"use server"
import React from "react"
import { EmailTemplate } from "@/app/components/EmailTemplate"
import { Resend } from "resend"
import { z } from "zod"
import { actionClient } from "../lib/safe-action"
import { flattenValidationErrors } from "next-safe-action"
import arcjet, { shield, detectBot, fixedWindow, request } from "@arcjet/next"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
	firstName: z.string().min(1, { message: "Le prénom est requis." }),
	lastName: z.string().min(1, { message: "Le nom de famille est requis." }),
	email: z.string().email({ message: "Adresse e-mail invalide." }),
	phone: z.string().optional(),
	message: z.string().min(1, { message: "Le message est requis." }),
})

const aj = arcjet({
	key: process.env.ARCJET_KEY!,
	rules: [
		shield({
			mode: "LIVE",
		}),
		detectBot({
			mode: "LIVE",
			allow: [],
		}),
		fixedWindow({
			mode: "LIVE",
			window: "1m",
			max: 5,
		}),
	],
})

const sendEmail = actionClient
	.schema(schema, {
		handleValidationErrorsShape: (ve) =>
			flattenValidationErrors(ve).fieldErrors,
	})
	.action(
		async ({ parsedInput: { firstName, lastName, email, phone, message } }) => {
			// throw new Error ('test')

			const req = await request()
			const decision = await aj.protect(req)

			if (decision.isDenied()) {
				if (decision.reason.isRateLimit()) {
					throw new Error(
						"Trop de tentatives d'envois. Veuillez réessayer plus tard."
					)
				}
				if (decision.reason.isBot()) {
					throw new Error("Vous êtes un bot. Veuillez vous en aller.")
				}
				throw new Error("Une erreur s'est produite.")
			}

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

			return {
				message: "Votre message bien été envoyé.",
			}
		}
	)

export default sendEmail
