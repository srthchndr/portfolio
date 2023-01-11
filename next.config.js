/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    webpack(config) {
        config.module.rules.push({
            issuer: /\.[jt]sx?$/,
            test: /\.svg$/i,
            use: [
                '@svgr/webpack'
            ]
        });
        return config;
    }
};

module.exports = nextConfig;
