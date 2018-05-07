module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'git',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        // 使用stylus  需npm install stylus stylus-loader  --save-dev 
        // 并更改webpack配置
        const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader') 
        vueLoader.options.loaders.stylus = 'vue-style-loader!css-loader!stylus-loader'

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
