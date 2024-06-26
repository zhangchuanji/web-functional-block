/*
 * @Author: 胡广合 3037237514@qq.com
 * @Date: 2024-06-19 10:57:22
 * @LastEditors: guanghe hgh475128@163.com
 * @LastEditTime: 2024-06-19 12:25:25
 * @FilePath: \my-webpack5\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

module.exports = {
    entry: {
        // path: './src/index.js',//？ 配置了其他多模式的（b2） 改形式（path）已无用
        // main: {path: './src/index.js'}, //？ 有了b2 出现多路口了 报错
        // a2: "./dependOn.js",
        b2: {
            // dependOn: "a2",
            // runtime 和 dependOn 不应在同一个入口上同时使用
            // 确保 runtime 不能指向已存在的入口名称(a2)
            // dependOn 不能是循环引用的
            import: "./src/app.js",
            // filename: "main02.js",
            // runtime: "runtimeName"
        }
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
      },
}