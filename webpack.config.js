const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/index.js',
  output: {
     filename: 'bundle.js',
     publicPath: '/assets',
     path: path.resolve('dist/js')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    compress: true
  }
}