var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');

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
    var version = shelljs.exec(`${scaffoldName} -v`, {silent:true}).stdout;
    // var version = shelljs.exec(`${scaffoldName} --version`, {silent:true}).stdout;
    var appInfo = shelljs.exec(`cnpm view ${scaffoldName}  version`, {silent:true}).stdout;
    version = excludeSpecial(version)
    appInfo = excludeSpecial(appInfo)

    if(appInfo !== version||!shell.which(scaffoldName)){
      console.log('版本是一样的')
      try {
        await exec(`cnpm i ${scaffoldName} -g`)
      } catch (error) {
      log.warn('报错了：' + error)
      }
    }

    log.info("开始生成脚手架")
    exec('pwd')
    spawn(scaffoldName, [], {
      cwd: process.cwd(),
      stdio: 'inherit'
    });

  }
}
var excludeSpecial = function(s) {  
  // 去掉转义字符  
  s = s.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');  
  // 去掉特殊字符  
  // s = s.replace(/[\@\#\$\%\^\&\*\{\}\:\"\L\<\>\?]/);  
  return s;  
}; 
