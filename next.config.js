/** @type {import('next').NextConfig} */

// Pagespeed optimization
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'",
  },
];

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
module.exports = nextConfig;
