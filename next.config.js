/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    // supply an array of trusted image domians no hhtps:// or http://
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
