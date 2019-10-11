const path = require('path'),
      HTMLWebpackPlugin = require('html-webpack-plugin');

/* from hindreen

 entry points
 https://webpack.js.org/concepts/entry-points/

 output
 https://webpack.js.org/concepts/output/

 plugins
 https://webpack.js.org/concepts/plugins/

 */

module.exports = {
    // default mode is production
    mode: 'development',
    devtool: 'none',

    entry: {
        // will create bundles './dist/client.js' etc. named after these keys
        // our entry points that i still don't quite understand, but we're getting there!
        client: './src/client.js',
        defaults: './src/defaults.js',
        server: './src/defaults.js'
    },
    output: {
        // path used to specify create location of bundle file
        // default is apparently path.join(__dirname, 'build')
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            // renders <title> ${name} </title>
            title: 'Webpack Demo',
            // user chunk as script file?
            chunks: ['client']
        })
    ]
};