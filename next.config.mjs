const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:5000/:path*', // Remove `/api` prefix from Flask
      },
    ];
  },
};

export default nextConfig;
