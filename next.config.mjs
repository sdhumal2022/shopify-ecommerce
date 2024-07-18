/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Use objects with 'host' key for each pattern
        domains: ['cdn.shopify.com'],
        remotePatterns: [
          { hostname: 'cdn.shopify.com'}
        ],
        minimumCacheTTL: 86400,
        formats: ['image/webp'],
      },

      // Optional: Only if you have custom page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
   // Ensure Next.js uses the `src` directory
   experimental: {
    appDir: true, // Ensures Next.js recognizes the src directory for the app
  },
    
};

export default nextConfig;
