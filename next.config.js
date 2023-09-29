/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	compress: true,
};

module.exports = nextConfig;
