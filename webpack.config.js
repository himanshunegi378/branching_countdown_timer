const path = require('path');


module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: "node",
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: true,   // if you don't put this is, __dirname
        __filename: true,  // and __filename return blank or /
    },
    // externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {

        rules: [
            
          
        ]
    },
    plugins: [

     
    ]
};