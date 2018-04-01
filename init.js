var inquirer = require('inquirer')
var spawn = require('child_process').spawn;


module.exports = {
  config: [{
    type: 'list',
    name: 'init',
    message: '你需要初始化什么框架？',
    choices: [
      new inquirer.Separator('-----微前端系列'),
      'micro-react',
      'micro-vue',
      'micro-angular',
      new inquirer.Separator('-----react系列'),
      'react',
      'react-antd',
      'react-mobx',
      'react-dva',
      'react-redux',
      new inquirer.Separator('-----Angular系列'),
      'angular',
      'angular-antd',
      new inquirer.Separator('-----vue系列'),
      'vue',
      'vue-vuex',
    ]
  }, ],
  callback: async function (answers) {
    let scaffoldName = 'lotus-scaffold-'+answers.init
    log.info('你选择的脚手架是：' , answers.init)
    
    log.info('开始拉取' , scaffoldName)
    try {
      await exec(`cnpm i ${scaffoldName} -g`)
    } catch (error) {
     log.warn('报错了：' + error)
    }

    log.info("开始生成脚手架")
    exec('pwd')
    spawn(scaffoldName, [], {
      cwd: __dirname,
      stdio: 'inherit'
    });

  }
}
