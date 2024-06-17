/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  // 检测规则, vue3用：'plugin:vue/vue3-essential'
  // '@vue/typescript/recommended',
  // 'plugin:prettier/recommended',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  // eslint-plugin-*插件，只写最后个名称就行
  plugins: ['vue', 'prettier'],
  // 声明全局变量
  globals: {
    $: true,
    BMap: true,
    NALA: true,
    define: true,
    require: true,
    NProgress: true,
  },

  // 0：关闭，1：警告，2：禁止   或者：off/warn/error
  rules: {
    'no-cond-assign': 2, // 禁止：在条件表达式中使用赋值语句
    'no-dupe-args': 2, // 禁止：函数参数重名
    'no-unused-vars': 2, // 禁止：未使用过的变量
    semi: ['error', 'always'], // 禁止：必须有分号
    'no-console': 1, // 警告：代码中存在console.log
    'no-unreachable': 0, // 警告：有无法执行的代码
    quotes: ['warn', 'single'], // 警告：字符串单引号
    indent: ['off', 4], // 关闭：缩进4个空格
    'linebreak-style': ['off', 'unix'], // 关闭：换行符
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      },
    ],
  },
};
