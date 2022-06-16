const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'convert-byte.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'convertByte',
      type: 'umd'
    }
  }
}