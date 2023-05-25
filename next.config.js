/** @type {import('next').NextConfig} */

const withHeaders = (headers) => (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    async headers() {
      return headers;
    },
  });
};

module.exports = withHeaders([
  {
    source: './public/assets/images/wavinghand.gif',
    headers: [
      {
        key: 'Cache-Control',
        value: 'no-store',
      },
    ],
  },
])({
  reactStrictMode: true,
});