var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',

  entry: {
    app: [
      './src/styles/main.scss',
      './src/app.js',
    ],
  },

  devServer: {
    contentBase: '.',
    port: 4000,
    compress: true,
    host: '0.0.0.0',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { config: {path: 'postcss.config.js'} }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
  ],

};
