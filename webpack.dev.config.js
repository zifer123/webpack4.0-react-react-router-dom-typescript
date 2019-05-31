const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

function resolve(url) {
  return path.join(__dirname, url);
}

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', resolve('src/main.tsx')],
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('dist'),
    port: 8080,
    hot: true,
    host: '0.0.0.0'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': resolve('src'),
      '@baseStyles': resolve('src/baseStyles'),
      '@components': resolve('src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          'awesome-typescript-loader'
        ],
        include: resolve('src')
      },
      {
        test: /\.js$/,
        use: {
          loader: 'source-map-loader'
        },
        enforce: 'pre'
      },
      {
        test: /\.scss$/,
        include: resolve('src'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              sass: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            // options: {
            //   includePaths: [resolve('src/styles'), resolve(('src/baseStyles'))]
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
