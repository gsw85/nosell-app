/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "marquint.com",
      "mainnet.marquint.com",
      "images.pexels.com",
      "firebasestorage.googleapis.com",
      "mnojeqnmhlhtgrlutzrj.supabase.co",
      "ygiuiabtxsxqxycxljfs.supabase.co",
    ],
  },
};
module.exports = nextConfig;
