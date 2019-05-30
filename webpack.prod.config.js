const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve(path) {
  return path.join(__dirname, path);
}

module.exports = {
  mode: "production",
  entry: resolve("src/main.tsx"),
  output: {
    path: resolve("dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: resolve("dist")
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
