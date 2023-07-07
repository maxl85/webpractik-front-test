const path = require('path');
const { createHash } = require('node:crypto');

/** @type {import('next').NextConfig} */


const getHash = (source, length) =>
  createHash('shake256', { outputLength: length }).update(source).digest('base64url');

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  
  sassOptions: {
    style: 'compressed',
    
    includePaths: [path.join(__dirname, 'src/styles')],
  },

  webpack: (config, { dev }) => {
    // https://github.com/vercel/next.js/discussions/15818
    let rule, moduleRules, cssLoader;
    if ((rule = config.module.rules.find((rule) => Object.keys(rule).includes('oneOf')))) {
      if (
        (moduleRules = rule.oneOf.filter(
          (r) =>
            ('test.module.scss'.match(r.test) || 'test.module.css'.match(r.test)) &&
            Array.isArray(r.use),
        ))
      ) {
        for (const moduleRule of moduleRules) {
          if ((cssLoader = moduleRule.use.find((u) => u.loader?.match('css-loader')))) {
            delete cssLoader.options.modules.getLocalIdent;
            cssLoader.options = {
              ...cssLoader.options,
              modules: {
                ...cssLoader.options.modules,
                getLocalIdent: ({ resourcePath }, localIdentName, localName) => {
                  const { name } = path.parse(resourcePath);
                  const moduleName = name
                    .replace(/\.module/g, '')
                    .replace(/\./g, '-');

                  // return dev
                  //   ? `${moduleName}--${localName}--${getHash(resourcePath, 2)}`
                  //   : `_${getHash(`${resourcePath}${localName}`, 4)}`;
                  return dev
                    ? `${localName}__${getHash(`${resourcePath}${localName}`, 3)}`
                    : `_${getHash(`${resourcePath}${localName}`, 4)}`;
                },
              },
            };
          }
        }
      }
    }
    return config;
  },

};

module.exports = nextConfig;
