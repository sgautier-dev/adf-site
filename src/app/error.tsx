"use client"

import { useEffect } from "react"

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					Quelque chose a mal tourné !
				</h1>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<button
						className="mt-4 flex-none rounded-md bg-paleRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-paleRed/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paleRed"
						onClick={
							// Attempt to recover by trying to re-render the segment
							() => reset()
						}
					>
						Réessayer
					</button>
				</div>
			</div>
		</div>
	)
}
