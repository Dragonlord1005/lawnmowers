// jshint esversion: 6
/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  experimental: {
    runtime: 'experimental-edge',
  },
};

module.exports = withBundleAnalyzer(nextConfig);
