const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/addpage.html/, to: '/addpage.html' },
        { from: /^\/addpageforguest.html/, to: '/addpageforguest.html' },
        { from: /^\/login.html/, to: '/login.html' },
        { from: /^\/register.html/, to: '/register.html' },
        { from: /^\/dashboard.html/, to: '/dashboard.html' },
        { from: /./, to: '/404.html' },
      ],
    },
  },
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'addpage.html',
      template: path.resolve(__dirname, 'src/views/addpage.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'addpageforguest.html',
      template: path.resolve(__dirname, 'src/views/addpageforguest.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, 'src/views/login.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: path.resolve(__dirname, 'src/views/register.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: path.resolve(__dirname, 'src/views/dashboard.html'),
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: path.resolve(__dirname, 'src/views/404.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
