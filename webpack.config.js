module.exports = {
  entry: ['babel-polyfill', './client/search.js'],
  output: {
    path: __dirname,
    filename: './public/react/seriesList.js'
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
