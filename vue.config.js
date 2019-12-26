const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 引入插件

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.js',
        // css: path.join(__dirname, 'src/assets/css'),
        '@': path.join(__dirname, "src")
      },
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,//consoledrop_debugger:false,
              pure_funcs: ["console.log"]//移除console           
            }
          }
        })
      ]
    }
  }
  // chainWebpack: config => {
  //   config.resolve.alias
  //   .set("@", resolve("src"))
  //   vue$: process.env.NODE_ENV === 'production'
  //               ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.esm.js'
  //   // .set("assets", resolve("src/assets"))
  //   // .set("components", resolve("src/components"))
  //   // .set("base", resolve("baseConfig"))
  //   // .set("public", resolve("public"));
  // }
}
