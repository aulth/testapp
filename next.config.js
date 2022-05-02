/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodb: process.env.mongodb
  }
}

module.exports = nextConfig
