const HtmlWebPackPlugin = require("html-webpack-plugin");
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');
let nodeExternals = require('webpack-node-externals');
var SRC_DIR = path.join(__dirname, '/src/client');
var SERVER_DIR = path.join(__dirname, '/src/server');
var DIST_DIR = path.join(__dirname, '/dist');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  filename: "./index.html",
  title: "Closet AI",
  template: './src/client/index.html'
});

const moduleObj = {
  rules: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  ]
};

const client = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module: moduleObj,
 plugins: [htmlWebpackPlugin]
};

const server = {
  mode: 'development',
  entry: {
    'server': `${SERVER_DIR}/index.jsx`,
  },
  target: 'node',
  output: {
    filename: 'serverBundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module: moduleObj,
  externals: [nodeExternals()],
  devServer: {
    hot: true,
  }
};


module.exports = [client, server];
