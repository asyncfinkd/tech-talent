/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_URL: "http://localhost:3002",
    SERVER_APP_API_URL: "https://s3.eu-central-1.amazonaws.com/public.tt.ge",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
};
