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
          {
            protocol: 'https',
            hostname: 'article.axiadira.com',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
        ],
      },
};

export default nextConfig;
