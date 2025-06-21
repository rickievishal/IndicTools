const isGithub = process.env.GITHUB_PAGES === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  trailingSlash: true, // required for GitHub Pages
  images: { unoptimized: true },
  basePath: isGithub ? '/IndicTools' : '',
};

export default nextConfig;
