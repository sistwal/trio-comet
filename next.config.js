/** @type {import('next').NextConfig} */

const getCorsHeaders = () => {
  const headers = {};

  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Credentials"] = "true";
  headers["Access-Control-Allow-Methods"] = "GET,OPTIONS,PATCH,DELETE,POST,PUT";
  headers["Access-Control-Allow-Headers"] =
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization";

  return Object.entries(headers).map(([key, value]) => ({ key, value }));
};

const nextConfig = {
  // reactStrictMode: true,
  // env: {
  //   // DOMAIN: 'https://dev.royalmobisol.com',
  //   DOMAIN: "http://localhost:3001",
  // },
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    domains: ["files.edgestore.dev"],
  },
  headers: async () => {
    return [
      {
        source: "/api/(.*)",
        headers: getCorsHeaders(),
      },
    ];
  },
  // swcMinify: true,
};

module.exports = nextConfig;
