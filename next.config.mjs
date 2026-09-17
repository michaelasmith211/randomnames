/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
