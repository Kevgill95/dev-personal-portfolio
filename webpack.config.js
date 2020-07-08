plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './public/index.html',
    favicon: './public/favicon.ico'
  }),
new HtmlWebpackPlugin(
  Object.assign(
    {},
    {
      inject: true,
      template: paths.appHtml,
    },
    isEnvProduction
      ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }
      : undefined
  )
),
new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),

{
  use: {
  loader: 'babel-loader',
  options: {
    presets: ['react']
  }
},
}
]
