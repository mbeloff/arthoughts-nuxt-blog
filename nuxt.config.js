module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'arthoughts blog',
    titleTemplate: '%s | Bob Ross workshops blog | arthoughts',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Bob Ross landscape workshops with a Certified Ross Instructor. Follow us for photos and updates for our classes in Brisbane and on the Gold Coast.'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'
      // },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
      },
    ],
  },
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes(callback) {
      const posts = require('./posts.json')
      let routes = posts.map(post => `/post/${post.id}`)
      callback(null, routes)
    }
  }
}