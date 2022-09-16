/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports =
    {
        nextConfig,
        // webpack(config) {
        //     config.module.rules.push({
        //         issuer: {
        //             test: /\.(js|ts)x?$/,
        //         },
        //         use: ['@svgr/webpack'],
        //     });
        //     return config
        // }
    }
