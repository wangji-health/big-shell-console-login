const path = require('path')
const webpack = require('webpack')

const ipAddress = 'localhost'
const port = 3061

module.exports = {
  entry: [
    './src/index.js'
  ],
  devServer: {
    hot: true,
    inline: true,
    host: ipAddress,
    port: port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://' + ipAddress + ':' + port + '/static/',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', 'jsx', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    }),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/
      },
      {
        test: /\.vue/, loaders: ['vue-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        loader: ['babel-loader?cacheDirectory', 'awesome-typescript-loader?useCache']
      },
      {test: /\.less$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']},
      {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|woff|woff2|ttf)([?]?.*)$/, loader: 'file-loader'}
    ]
  }
}
