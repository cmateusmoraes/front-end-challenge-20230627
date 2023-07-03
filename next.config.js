/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["i.ytimg.com"],
  },
};
module.exports = nextConfig;
