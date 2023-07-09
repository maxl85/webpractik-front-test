const path = require('path');
const { createHash } = require('node:crypto');

/** @type {import('next').NextConfig} */


// const getHash = (source, length) =>
//   createHash('shake256', { outputLength: length }).update(source).digest('base64url');

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  sassOptions: {
    style: 'compressed',

    includePaths: [path.join(__dirname, 'src/styles')],
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        issuer: fileLoaderRule.issuer,
        // resourceQuery: { not: /url/ }, // exclude if *.svg?url
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },

  // webpack: (config, { dev }) => {
  //   // https://github.com/vercel/next.js/discussions/15818
  //   let rule, moduleRules, cssLoader;
  //   if ((rule = config.module.rules.find((rule) => Object.keys(rule).includes('oneOf')))) {
  //     if (
  //       (moduleRules = rule.oneOf.filter(
  //         (r) =>
  //           ('test.module.scss'.match(r.test) || 'test.module.css'.match(r.test)) &&
  //           Array.isArray(r.use),
  //       ))
  //     ) {
  //       for (const moduleRule of moduleRules) {
  //         if ((cssLoader = moduleRule.use.find((u) => u.loader?.match('css-loader')))) {
  //           delete cssLoader.options.modules.getLocalIdent;
  //           cssLoader.options = {
  //             ...cssLoader.options,
  //             modules: {
  //               ...cssLoader.options.modules,
  //               getLocalIdent: ({ resourcePath }, localIdentName, localName) => {
  //                 const { name } = path.parse(resourcePath);
  //                 const moduleName = name
  //                   .replace(/\.module/g, '')
  //                   .replace(/\./g, '-');

  //                 // return dev
  //                 //   ? `${moduleName}--${localName}--${getHash(resourcePath, 2)}`
  //                 //   : `_${getHash(`${resourcePath}${localName}`, 4)}`;
  //                 return dev
  //                   ? `${localName}__${getHash(`${resourcePath}${localName}`, 3)}`
  //                   : `_${getHash(`${resourcePath}${localName}`, 4)}`;
  //               },
  //             },
  //           };
  //         }
  //       }
  //     }
  //   }
  //   return config;
  // },

};

module.exports = nextConfig;
