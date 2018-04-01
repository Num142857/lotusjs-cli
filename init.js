var inquirer = require('inquirer')
const chalk = require('chalk');
const exec = require('./Util/exec')
module.exports ={
    config:[{
        type: 'list',
        name: 'init',
        message: '你需要初始化什么框架？',
        choices: [
        new inquirer.Separator('-----微前端系列'),
          'micro react',
          'micro vue',
          'micro angular',
          new inquirer.Separator('-----react系列'),
          'react',
          'react and antd',
          'react and mobx',
          'react and dva',
          'react and redux',
          new inquirer.Separator('-----Angular系列'),
          'angular',
          'angular and antd',
          new inquirer.Separator('-----vue系列'),
          'vue',
          'vue and vuex',
        ]
      },
    ],
    callback: async function (answers){
        console.log(chalk.green('你选择的脚手架是：' + answers.init))
        console.log(chalk.green('开始拉取' + answers.init))
        try {
        //    let res =  await exec('cnpm i shelljs')
           console.log(111,await exec('cnpm i shel3232ljs'))
        } catch (error) {
            console.log(chalk.red('报错了：'+error))
        }
       
    }
}