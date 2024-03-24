/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add rule to handle glb files
    config.module.rules.push({
      test: /\.(glb)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '',
            outputPath: 'static/images/', // Adjust the output path as needed
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ['drive.google.com'],
  },
  experimental: {
    serverActions: true,
  },
  env: {
    FRONTEND_URL: process.env.FRONTEND_URL,
    BACKEND_URL: process.env.BACKEND_URL,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
