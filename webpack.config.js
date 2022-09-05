const path = require('path');
const webpack = require("webpack");

let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    }
}
  
module.exports = config;