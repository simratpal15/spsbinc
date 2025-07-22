/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image imports
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com', 
      'sjc.microlink.io', 
      'v0.blob.com',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Improve build reliability
  experimental: {
    // Use Node.js to install dependencies during build
    // This can help bypass temporary npm registry issues
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;

