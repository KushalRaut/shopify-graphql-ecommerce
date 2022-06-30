const { withFrameworkConfig } = require('./framework/common/config')

module.exports = withFrameworkConfig({
  images: {
    domains: ['assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },
  framework: {
    name: 'shopify_local',
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
})

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
