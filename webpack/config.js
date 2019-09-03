const path = require('path');

// base folders
exports.root = path.resolve(__dirname, '../');
exports.buildDirectory = 'build';
exports.buildPath = path.join(exports.root, exports.buildDirectory);

// entry files
exports.jsEntry = path.join(exports.root, 'src', 'index.js');
exports.htmlEntry = path.join(exports.root, 'src', 'index.html');

// target files
exports.targetPath = {
    css: 'assets/css/[name].[chunkhash:8].css',
    js: 'assets/js/[name].[chunkhash:8].js',
    media: 'assets/media/[name].[hash:8].[ext]',
};
