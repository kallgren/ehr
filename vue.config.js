const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, 'src/assets/styl/variables.styl'),
          path.resolve(__dirname, 'src/assets/styl/mixins.styl')
        ]
      }
    }
  }
}
