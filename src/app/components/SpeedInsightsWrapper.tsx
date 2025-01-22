"use client"

import { useEffect } from "react"
import { injectSpeedInsights } from "@vercel/speed-insights"

export default function SpeedInsightsWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	useEffect(() => {
		injectSpeedInsights()
	}, [])

	return <>{children}</>
}
