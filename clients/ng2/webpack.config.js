module.exports = {
  entry: {
    "app": "./app/main",
  },
  output: {
    filename: "./bundles/[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
}