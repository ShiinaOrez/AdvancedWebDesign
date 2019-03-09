const path = require('path')

module.exports = {
    entry: './public/js/compiled.mjs',
    output: {
        filename: 'pack.mjs',
        path: path.resolve(__dirname, 'dist')
    }
}
