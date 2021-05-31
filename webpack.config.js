module.exports = {
    mode: 'development',
    entry: './index.js',
    module:{
        rules:[{
            test: /\.js$/,
            use: {
                loader:'babel-loader',
                option:{
                    presets:['@babel/preset-react']
                }
            }
        }]
    }
}