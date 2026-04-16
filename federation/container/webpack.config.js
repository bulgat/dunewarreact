const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('../container/node_modules/webpack/lib/container/ModuleFederationPlugin')
module.exports = {
    mode: 'development',
    devServer: { port: 8000 },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                app1:'app1@http://localhost:8001/remoteEntry.js'
            }

        }),
    ]
};
