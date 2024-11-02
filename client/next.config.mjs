/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/ARC2013-Yifu', // Replace 'your-repo-name' with the actual repository name
    assetPrefix: '/ARC2013-Yifu/', // Replace 'your-repo-name' with the actual repository name
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
