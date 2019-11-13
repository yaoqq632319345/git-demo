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
  loading: false,
  /*
  ** Build configuration
  */
  // 添加element-ui
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true,
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // 加载公用样式
    '~assets/css/reset.css'
  ],
  build: {
    // 抽离css
    extractCSS: { allChunks: true },
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
