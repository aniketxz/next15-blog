import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'static.wixstatic.com',
				protocol: 'https',
				port: '',
			},
			{
				hostname: 'www.shutterstock.com',
				protocol: 'https',
				port: '',
			},
			{
				hostname: 'plus.unsplash.com',
				protocol: 'https',
				port: '',
			},
			{
				hostname: 'images.unsplash.com',
				protocol: 'https',
				port: '',
			},
		],
	},
}

export default nextConfig
