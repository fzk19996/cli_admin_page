const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'localhost:8080',
    //     pathRewrite: {
    //       '^/api': '/api'
    //     },
    //     changeOrigin: true,
    //   }
    // }
    // before:  require('./Mock/index.js')
  }
})
