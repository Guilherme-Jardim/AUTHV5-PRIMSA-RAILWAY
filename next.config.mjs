/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
fetches: {
  fullUrl: true,
}
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.tcdn.com.br',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.awsli.com.br',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'r.bing.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
