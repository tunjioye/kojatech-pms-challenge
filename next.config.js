const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([withImages], {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    APP_NAME: process.env.APP_NAME,
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  exportPathMap: function () {
    return {
      // Public Pages
      '/': { page: '/' },
      // Auth Pages
      '/auth': { page: '/auth' },
      '/auth/login': { page: '/auth/login' },
      '/auth/signup': { page: '/auth/signup' },
      // Dashboard Pages
      '/dashboard': { page: '/dashboard' },
    }
  },
})
