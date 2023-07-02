const path = require('path');

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    style: 'compressed',
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

module.exports = nextConfig;
