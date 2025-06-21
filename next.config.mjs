/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  trailingSlash: true, // required for GitHub Pages
  images: { unoptimized: true },
  basePath: '/IndicTools',
};

export default nextConfig;
