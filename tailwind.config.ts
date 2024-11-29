import type { Config } from "tailwindcss"
import formsPlugin from "@tailwindcss/forms"
import headlessuiPlugin from "@headlessui/tailwindcss"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		backgroundImage: {
			"home-bg": "url('/images/home-bg.png')",
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				cadetBlue: "#4AA5AA",
				paleRed: "#EC73A2",
			},
			keyframes: {
				appear: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				slide: {
					from: {
						transform: "translateX(100%)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0%)",
						opacity: "1",
					},
				},
				translate: {
					from: {
						transform: "translateY(20%)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
			},
			animation: {
				appear: "appear 1s ease-in-out",
				slide: "slide 750ms ease-in-out",
				translate: "translate 2s ease-in-out forwards",
			},
			fontFamily: {
				quicksand: ["var(--font-quicksand)"],
				leagueSpartan: ["var(--font-leagueSpartan)"],
			},
		},
	},
	plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
