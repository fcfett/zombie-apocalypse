const ROUTES = require("./routes");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: ROUTES.ROOT,
        destination: ROUTES.SURVIVORS,
        permanent: true,
      },
    ];
  },
};
