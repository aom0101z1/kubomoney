import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kubomoney.com" }],
        destination: "https://kubomoney.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
