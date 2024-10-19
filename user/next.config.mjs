const nextConfig = {
  reactStrictMode: false,
  images: {
    /* TODO: REMOVE THIS DOMAINS ONCE THE BACKEND BUCKET ISSUE IS FIXED*/
    domains: [
      'zomo-frontend.s3.amazonaws.com',
      'zomo-dev-frontend.s3.amazonaws.com',
    ],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zomo-frontend.s3.amazonaws.com',
        port: '',
        pathname: '/feimg/**',
      },
      {
        protocol: 'https',
        hostname: 'zomo-dev-frontend.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.fod247.io',
        port: '',
        pathname: '/thumbnails/**',
      },
      {
        protocol: 'https',
        hostname: 'cf-images.us-east-1.prod.boltdns.net',
        port: '',
        pathname: '/v1/**/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.fod247.com',
        port: '',
        pathname: '/assets/thumbnails/**',
      },
    ],
  },
};

export default nextConfig;
