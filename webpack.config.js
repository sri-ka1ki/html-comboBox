const path = require('path');

module.exports = {
  context: __dirname,
  mode: "production",
  entry: {
    comboBox: './src/comboBox.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'comboBox',
    libraryExport: 'comboBox',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  }
};