const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    data: './src/data.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.ttf$/i,
            type: 'asset/resource',
        },
        {
          test: /\.png$/i,
          type: 'asset/resource',
        },
    ]
  },
};