# 技术
1. fontent
    1. vue
    2. react
    3. uniapp
    4. wbepack
        1. 入口：entry：String | Array | Object default: './stc/index.js'
            | 属性 | 描述 |
            | --- | --- |
            | dependOn | 当前入口所依赖的入口。它们必须在该入口被加载前被加载。 |
            | filename | 指定要输出的文件名称。 |
            | import | 启动时需加载的模块。 |
            | library | 指定 library 选项，为当前 entry 构建一个 library。 |
            | runtime | 运行时 chunk 的名字。如果设置了，就会创建一个新的运行时 chunk。在 webpack 5.43.0 之后可将其设为 false 以避免一个新的运行时 chunk。 |
            | publicPath | 当该入口的输出文件在浏览器中被引用时，为它们指定一个公共 URL 地址。请查看 output.publicPath |
            - 实例
            - ```js
                entry: {
                    a2: 'dependingfile.js',
                    b2: {
                        dependOn: 'a2',
                        import: './src/app.js',
                    },
                },
            ```
        2. 出口：output
            主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中
2. backend
    1. java
    2. node
        1. 框架: express koa egg nest
        2. 技术：
