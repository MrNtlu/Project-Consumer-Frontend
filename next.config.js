/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["image.tmdb.org", "cdn.myanimelist.net", "media.rawg.io", "img.logo.dev"],
  },
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
}
