import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // nodemailer uses dynamic requires; bundling it with Turbopack/Webpack
  // can hang the /api/contact compile and break form submissions.
  serverExternalPackages: ["nodemailer"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
};

export default nextConfig;
