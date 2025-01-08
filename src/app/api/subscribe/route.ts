import { NextRequest, NextResponse } from "next/server"
// eslint-disable-next-line
const mailchimp = require("@mailchimp/mailchimp_marketing")

import { validateEmail, getRecaptchaVerificationUrl } from "@/app/lib/utils"
import { getTranslations } from "@/app/lib/getTranslations"

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER,
})

/*
Subscribe form route: It validates an email address, verifies a reCAPTCHA token, and adds the email address to a Mailchimp mailing list if all validations pass.
*/
export async function POST(req: NextRequest) {
	const { email, token, locale = "fr" } = await req.json()
	const translations = await getTranslations(locale)

	if (!email)
		return NextResponse.json(
			{ message: translations.newsletter.email_missing },
			{ status: 400 }
		)
	if (!validateEmail(email)) {
		return NextResponse.json(
			{ message: translations.newsletter.invalid_email },
			{ status: 400 }
		)
	}

	try {
		const verifyRecaptchaUrl = getRecaptchaVerificationUrl(token)
		const verifyRecaptcha = await fetch(verifyRecaptchaUrl)
		const responseRecaptcha = await verifyRecaptcha.json()

		if (!responseRecaptcha.success) {
			return NextResponse.json(
				{
					message: translations.newsletter.recaptcha_failed,
				},
				{ status: 400 }
			)
		}
	} catch (error: unknown) {
		console.error(error)
		return NextResponse.json(
			{
				message: translations.newsletter.recaptcha_error,
			},
			{ status: 500 }
		)
	}

	try {
		const listId = process.env.MAILCHIMP_AUDIENCE_ID
		const response = await mailchimp.lists.addListMember(listId, {
			email_address: email,
			status: "subscribed",
		})

		if (response.status === "subscribed") {
			return NextResponse.json(
				{
					message: translations.newsletter.subscription_success,
				},
				{ status: 200 }
			)
		} else {
			return NextResponse.json(
				{
					message: translations.newsletter.subscription_error,
				},
				{ status: 400 }
			)
		}
		// eslint-disable-next-line
	} catch (error: any) {
		console.error(error)
		const { title, detail, status } = error.response?.body || {}
		switch (title) {
			case "Invalid Resource":
				return NextResponse.json(
					{ message: translations.newsletter.invalid_email_message },
					{ status: error.status }
				)
			case "Member Exists":
				return NextResponse.json(
					{ message: translations.newsletter.already_subscribed },
					{ status: error.status }
				)
			case "Forgotten Email Not Subscribed":
				return NextResponse.json(
					{
						message: translations.newsletter.email_removed,
					},
					{ status: error.status }
				)
			// add other error cases here
			default:
				return NextResponse.json(
					{
						message: detail || translations.newsletter.unexpected_error,
					},
					{ status: status || 500 }
				)
		}
	}
}
