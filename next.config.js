var webpack = require('webpack')
const { parsed: GIPHY_API_KEY } = require('dotenv').config()

// Customize Next.js configuration options and Next.js webpack configuration here.
// For config see - https://github.com/zeit/next.js#custom-configuration
// For wepack see - https://github.com/zeit/next.js#customizing-webpack-config
module.exports = {
  // Turn off Next.js X-Powered-By http header
  poweredByHeader: false,
  webpack: (config, { dev }) => {
    // https://github.com/moment/moment/issues/2416#issuecomment-111713308
    // Remove all of the Moment.js locales
    config.plugins.push(
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    )

    // Ignore test files in pages
    config.module.rules.push(
      {
        test: /-test\.js$/,
        loader: 'ignore-loader'
      }
    )

    config.plugins.push(
      new webpack.EnvironmentPlugin(GIPHY_API_KEY)
    )

    return config
  }
}
