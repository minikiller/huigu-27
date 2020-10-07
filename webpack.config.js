var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".vue"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.vue?$/,
        exclude: /(node_modules)/,
        use: "vue-loader",
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8090,
    disableHostCheck: true,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://106.12.216.163:5000",
      // apiUrl: "http://192.168.1.29:5000",
    }),
  },
};
