const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve(url) {
  return path.join(__dirname, url);
}

module.exports = {
  mode: "development",
  entry: resolve("src/main.tsx"),
  output: {
    path: resolve("dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: resolve("dist"),
    port: 8080,
    host: "0.0.0.0"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }, 'awesome-typescript-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: "source-map-loader"
        },
        enforce: "pre"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("public/index.html")
    })
  ]
};
