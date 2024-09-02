/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backend.axiadira.com',
            port: '',
            pathname: '/uploads/**',
          },
        ],
      },
};

export default nextConfig;
