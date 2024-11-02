/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/ARC2013-Yifu', // Ensure this matches your repository name
    assetPrefix: '/ARC2013-Yifu/', // Ensure this matches your repository name
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
