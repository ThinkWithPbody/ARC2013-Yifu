/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/ARC2013-Yifu' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/ARC2013-Yifu/' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
