import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

/*
Revalidate route: Triggered by a Eventbrite webhook. 
It retrieves tag and secret from the search params. 
Revalidate on demand the provided tag.
*/
export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret")

	// Security check
	if (secret !== process.env.REVALIDATE_TOKEN) {
		return NextResponse.json(
			{ message: "Invalid revalidation token!" },
			{ status: 401 }
		)
	}

	try {
		// Revalidate the entire /events path
		console.log("Revalidating path: /events")
		revalidatePath("/events") // Specify the route you want to revalidate

		return NextResponse.json({ revalidated: true, now: Date.now() })
	} catch (err) {
		console.error("Error during revalidation:", err)
		return NextResponse.json(
			{ message: "Error revalidating path." },
			{ status: 500 }
		)
	}
}
