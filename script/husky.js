const fs = require('fs')
const shell = require('shelljs');
const path = require('path')
const subRepository = require('../package.json').subRepository // 需要到package.json自定义需要校验的项目目录字段

fs.readFile('chanceList.txt', (err, data) => {
    if (err) {
        throw err
    }
    subRepository && subRepository.forEach(item => {
        // if (data.toString().includes(`${item}/src/`)) { // 判断当前的变更的文件是否在src下面，需要触发去触发校验
            shell.cd(path.resolve(__dirname, `../${item}`))
            shell.exec('npx lint-staged') // 触发每个项目里面的前端lint-staged,如果是其他的校验触发，可以自行修改
        // }
    })
})