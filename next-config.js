/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for deployment
  output: process.env.DEPLOY_TARGET === 'github-pages' ? 'export' : 'standalone',
  
  // Base path for GitHub Pages deployment
  basePath: process.env.DEPLOY_TARGET === 'github-pages' ? '/lilbet-traffic' : '',
  
  // Asset prefix for CDN
  assetPrefix: process.env.DEPLOY_TARGET === 'github-pages' ? '/lilbet-traffic/' : '',
  
  // Image optimization
  images: {
    unoptimized: process.env.DEPLOY_TARGET === 'github-pages',
    domains: [
      'github.com',
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'vercel.app',
      'github.io'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.github.io',
      }
    ]
  },
  
  // Environment variables that should be available on the client
  env: {
    NEXT_PUBLIC_APP_NAME: 'LilBet Traffic Center',
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
    NEXT_PUBLIC_API_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}/api`
      : process.env.NEXT_PUBLIC_API_URL || '/api',
    NEXT_PUBLIC_WEBSOCKET_URL: process.env.VERCEL_URL
      ? `wss://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_WEBSOCKET_URL || '',
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Fixes for server-side packages
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    
    // Add aliases for cleaner imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
      '@components': './src/components',
      '@lib': './src/lib',
      '@hooks': './src/hooks',
      '@styles': './src/styles',
      '@types': './src/types',
      '@utils': './src/utils',
    };
    
    return config;
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/overview',
        permanent: false,
      }
    ];
  },
  
  // Rewrites for API proxying if needed
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        }
      ],
      fallback: []
    };
  },
  
  // Experimental features
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
  },
  
  // TypeScript and ESLint
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Trailing slash configuration
  trailingSlash: false,
  
  // React strict mode
  reactStrictMode: true,
  
  // SWC minification
  swcMinify: true,
  
  // Powered by header
  poweredByHeader: false,
  
  // Compress responses
  compress: true,
  
  // Generate ETags
  generateEtags: true,
  
  // Page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Disable x-powered-by header
  poweredByHeader: false,
  
  // Production browser source maps
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;