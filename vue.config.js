const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 引入插件

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
module.exports = {
  lintOnSave: false,
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
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 9099,
    https: false,
    hotOnly: false,
    proxy: {
      "/webdiapp": {
        target: "http://localhost:8080",
        changeOrigin: true, // 是否改变域名
        ws: true
        // pathRewrite: {
        //   // 路径重写
        //   "/webdiapp": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        // }
      }
    },
    before: app => {}
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
