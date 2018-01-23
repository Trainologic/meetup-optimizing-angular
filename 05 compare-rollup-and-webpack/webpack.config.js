const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.webpack.js',
        path: path.resolve(__dirname, 'dist')
    }
};
