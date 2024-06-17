'feat',     //新特性、新功能
'fix',      //修改bug
'docs',     //文档修改
'style',    //代码格式修改, 注意不是 css 修改
'refactor', //代码重构
'perf',     //优化相关，比如提升性能、体验
'test',     //测试用例修改
'chore',    //其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',   //回滚到上一个版本
'build',    //编译相关的修改，例如发布版本、对项目构建或者依赖的改动
————————————————
1. husky（可以不下载）  lint-staged（下载会更快）  @commitlint/config-conventional @commitlint/cli （在根目录使用）    看源码
2.eslint
3.prettier 
// lint-staged需要和node版本对应
// npx husky install
// ./node_modules/.bin/husky add .husky/pre-commit "npx eslint --fix packages/**/*.{ts,js,vue}"  当前已经不支持了所以使用 commitlint

// npm install --save-dev @commitlint/config-conventional @commitlint/cli 

// #!/usr/bin/env sh
// . "$(dirname -- "$0")/_/husky.sh"

// git status | grep modified | awk '{print $2}' > chanceList.txt
// node script/husky.js