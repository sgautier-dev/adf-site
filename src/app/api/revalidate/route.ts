import { NextRequest, NextResponse } from "next/server"
import { revalidateTag } from "next/cache"

/*
Revalidate route: Triggered by a Eventbrite webhook. 
It retrieves tag and secret from the search params. 
Revalidate on demand the provided tag.
*/
export async function POST(request: NextRequest) {
	// to use with a webhook: http://localhost:3000/api/revalidate?tag=xxxx&secret=xxxxx
	const tag = request.nextUrl.searchParams.get("tag")
	const secret = request.nextUrl.searchParams.get("secret")

	if (secret !== process.env.REVALIDATE_TOKEN || !tag) {
		return NextResponse.json(
			{
				message: "Invalid revalidation params !",
			},
			{ status: 401 }
		)
	}

	try {
		revalidateTag(tag)
		return NextResponse.json({ revalidated: true, now: Date.now() })
	} catch (err) {
		console.error(err)
		return NextResponse.json(
			{
				message: "Error revalidating",
			},
			{ status: 500 }
		)
	}
}
