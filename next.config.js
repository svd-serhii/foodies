/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: "export",
	basePath: "",
	assetPrefix: "",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "sbd-serhii-nextjs-demo-users-image.s3.amazonaws.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
