const path = require('path');

module.exports = {  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./src/main.jsx']
  },
  output: {
    path: path.resolve(__dirname, "./bundle/js"),
    filename: 'bundle.js',
    publicPath: '/bundle/js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy', 'babel-plugin-react-html-attrs']
        }
      }
    ]
  }
}