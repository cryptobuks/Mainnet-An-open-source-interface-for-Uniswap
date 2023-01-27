var path = require('path');
module.exports = {
    resolve: {
        alias: {
          myApp: path.resolve(__dirname, 'src'),
        },
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
      }
}