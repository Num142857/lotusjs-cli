var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');

module.exports = {
  config: [{
    type: 'list',
    name: 'init',
    message: '你需要初始化什么框架',
    choices: [
      new inquirer.Separator('-----react系列'),
      'react',
      'react-antd',
      'react-mobx',
      new inquirer.Separator('-----微前端系列'),
      'micro-react',
      'micro-vue',
      'micro-angular',
      new inquirer.Separator('-----Angular系列'),
      'angular',
      'angular-antd',
      new inquirer.Separator('-----vue系列'),
      'vue',
      'vue-vuex',
    ]
  }, ],
  callback: async function (answers,type) {
    if(type ==='cmd'){
      var scaffoldName = 'lotus-scaffold-' + answers
      log.info('你选择的脚手架是：', answers)
    }else{
      var scaffoldName = 'lotus-scaffold-' + answers.init
      log.info('你选择的脚手架是：', answers.init)
    }

    var localVersion = shelljs.exec(`${scaffoldName} -v`, {silent:true}).stdout;
    // var version = shelljs.exec(`${scaffoldName} --version`, {silent:true}).stdout;
    var remoteVersion = shelljs.exec(`cnpm view ${scaffoldName}  version`, {silent:true}).stdout;
    localVersion = excludeSpecial(localVersion)
    remoteVersion = excludeSpecial(remoteVersion)

   let installPack = async function(){
      try {
        log.info('开始拉取' , scaffoldName)
        await exec(`cnpm i ${scaffoldName} -g`)
      } catch (error) {
      log.warn('报错了：' + error)
      }
    }
    console.log(remoteVersion , localVersion)
    if(remoteVersion !== localVersion){
      //todo：需要询问用户是否更新，或者忽略该版本
      log.info(`发现新版本${remoteVersion}`,'开始更新')
      installPack()
    }
    
    if(!shelljs.which(scaffoldName)){
      log.info('开始安装脚手架',scaffoldName)
      installPack()
    }

    log.info("开始生成脚手架")
    spawn(`${scaffoldName}`, ['init'], {
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
