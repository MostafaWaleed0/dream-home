const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.html$/,
        use: ['html-loader'],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]',
        },
      },

      {
        test: /\.(css)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: 'src/home.html',
      chunks: ['main'],
    }),

    new MiniCssExtractPlugin({
      filename: '[name][contenthash].css',
    }),
  ],
};
