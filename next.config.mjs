/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig
