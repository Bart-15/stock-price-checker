/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    POLYGON_API_KEY: process.env.POLYGON_API_KEY,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/stock',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
