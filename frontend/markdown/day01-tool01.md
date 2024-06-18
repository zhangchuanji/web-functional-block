# 代码提交前校验工具husky 原理 git hooks
## 下载工具
- husky（可以不下载）  
- lint-staged（下载会更快）  
- @commitlint/config-conventional @commitlint/cli （在根目录使用）
- 配合 eslint（语法校验） prettier （代码格式化）
---
## 遇到的问题
- lint-staged @commitlint/config-conventional @commitlint/cli 需要和node版本对应
- npx husky install
- 一个仓库多个项目使用
  - 根目录使用commit-msg & pre-commit**遍历package属性中项目，进入并使用子项目的命令**
  - 子项目使用pre-commit
---
## commitlint 代码提交风格
| 属性 | 描述 |
| --- | --- |
| feat |     新特性、新功能 |
| fix |      修改bug |
| docs |     文档修改 |
| style |    代码格式修改, 注意不是 css 修改 |
| refactor | 代码重构 |
| perf |     优化相关，比如提升性能、体验 |
| test |     测试用例修改 |
| chore |    其他修改, 比如改变构建流程、或者增加依赖库等 |
| revert |   回滚到上一个版本 |
| build |    编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
---
- [ ] 所有工具各项配置熟悉
  - [ ] eslint
  - [ ] prettier
  - [ ] husky、lint-staged、config-conventional
  - [ ] react add eslint test husky 等 
- [ ] 工具的源码
