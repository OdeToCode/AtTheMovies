module.exports = {
  entry: {
    "app": "./app/boot",
    "test": "./tests"
  },
  output: {
    filename: "./bundles/[name].js"
  },
  resolve: {
    extensions: ["", ".js", ".ts"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader", exclude: [/node_modules/] }
    ]
  }
}
