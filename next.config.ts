import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.evbuc.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
