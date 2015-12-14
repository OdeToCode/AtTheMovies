module.exports = {
  entry: {
    "app": "./app/main",
    "angular2": [
        "angular2/angular2"
    ]
  },
  output: {
    filename: "./bundles/[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts" }
    ]
  }
}