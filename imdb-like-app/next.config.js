/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'http',
    hostname: 'image.tmdb.org'
   },
   {
    protocol: 'https',
    hostname: 'knetic.org.uk'
   }
  ]
 }
}

module.exports = nextConfig
