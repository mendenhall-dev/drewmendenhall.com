/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig
