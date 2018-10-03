module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
  
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
    },
    devServer: {
        host: '0.0.0.0',//your ip address
        port: 8080,
        
    },
    mode: "none"
  }