/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  generateEtags: false,
  poweredByHeader: false,
  compress: false,
  // Ensure all pages are statically generated
  generateBuildId: async () => {
    return 'fractal-dapp-build'
  }
}

module.exports = nextConfig