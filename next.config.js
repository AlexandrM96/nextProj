/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports =
    {
        nextConfig,
        images: {
            domains: ['courses-top.ru']
        },
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
