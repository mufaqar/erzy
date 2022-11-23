/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com', 'elasticbeanstalk-eu-west-3-727754594471.s3.eu-west-3.amazonaws.com'],
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US'
  }
}

module.exports = nextConfig
