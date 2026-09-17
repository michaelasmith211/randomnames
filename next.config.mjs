/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
// If deployed to <username>.github.io/<repo>, basePath is /<repo>
// If a custom domain is used, basePath should be empty
const repoName = 'randomnames';
const basePath = isGithubActions && !process.env.CUSTOM_DOMAIN ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
