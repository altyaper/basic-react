const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/index.js',
  output: {
     filename: 'bundle.js',
     path: path.resolve('dist/js')
  },
  module: {
    rules: [
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
  }
}