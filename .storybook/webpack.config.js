const path = require('path')

const componentsPath = path.resolve(__dirname, '../components')

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [componentsPath]
                        }
                    }
                ],
                include: componentsPath
            }
        ]
    }
}
