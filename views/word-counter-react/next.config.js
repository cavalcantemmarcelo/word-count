/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;
