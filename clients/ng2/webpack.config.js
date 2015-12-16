module.exports = {
  entry: {
    "app": "./app/main.ts"
  },
  output: {
    filename: "./bundles/[name].js"
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader", exclude: [ /node_modules/ ]}
    ]
  }
}
