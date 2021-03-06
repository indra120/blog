/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  experimental: {
    modularizeImports: {
      '@mui/material/?(((\\w*)?/?)*)': {
        transform: '@mui/material/{{ matches.[1] }}/{{member}}',
      },
      '@mui/icons-material/?(((\\w*)?/?)*)': {
        transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}',
      },
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
