import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      "m.media-amazon.com",
      "images.harpersbazaar.co.id",
      "assets.vogue.in",
      "cdn.britannica.com",
      "upload.wikimedia.org",
      "blogger.googleusercontent.com"
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // Menambahkan alias '@' untuk folder 'src'
    };
    return config;
  },
};

export default nextConfig;
