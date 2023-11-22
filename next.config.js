/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "cdn.myanimelist.net", "media.rawg.io"],
  },
}

module.exports = nextConfig
