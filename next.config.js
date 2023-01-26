/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        domains: [
            'cdn.sanity.io'
        ]
    },
    webpack(config) {
        config.module.rules.push(
            {
                issuer: /\.[jt]sx?$/,
                test: /\.svg$/i,
                use: [
                    '@svgr/webpack'
                ]
            },
            {
                test: /\.pdf$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        );
        return config;
    }
};

module.exports = nextConfig;
