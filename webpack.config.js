var path = require("path");

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|htdocs)/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react'],
      plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
    }
  },
  {
    test: /.*\.scss/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'sass'
    ]
  },
  ,{
    test: /\.json$/,
    loader: 'json-loader'
  }
];

module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, "."),
    publicPath: ".",
    filename: "server.bundle.js"
  },
  devServer: {
    contentBase: 'htdocs',
    port: 8000
  },
  module: {
    loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'app', 'node_modules'
    ]
  }
}
