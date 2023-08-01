const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./client/index.js",
  // target: 'electron-renderer',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "index.html"),
    }),
    new Dotenv(),
  ],
  performance: {
    hints: false,
  },
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //       //   secure: false,
  //     },
  //   },
  //   // ],
  // },
  // devServer: {
  //   historyApiFallback: true,
  //   port: 8080,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8080",
  //       router: () => "http://localhost:3000",
  //     },
  //   },
  // },
  devServer: {
    port: 8080,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3000",
      },
    ],
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: "file-loader",
      },
    ],
  },
  // resolve: {
  //   fallback: { crypto: false },
  // },
};
