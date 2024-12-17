import { ArrowPathIcon } from "@heroicons/react/24/outline"

export default function Loading() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-white">
			<ArrowPathIcon className="h-20 w-20 animate-spin text-cadetBlue" />
		</div>
	)
}
