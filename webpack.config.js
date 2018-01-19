/**
 * Created by lenovo on 2018/1/19.
 */
const path = require('path');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};