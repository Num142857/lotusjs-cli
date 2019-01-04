var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');

module.exports = {
  config: [{
    type: 'list',
    name: 'init',
    message: '哪一个才是你的选择?',
    choices: [
      new inquirer.Separator('-----微前端系列'),
      'micro-react',
      'micro-antd',
      'micro-antd-sub',
      'micro-frontend-portal',
      'micro-frontend-server',
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
        shelljs.exec(`cnpm i ${scaffoldName} -g`)
      } catch (error) {
      log.warn('报错了：' + error)
      }
    }

    if(remoteVersion !== localVersion){
      //todo：需要询问用户是否更新，或者忽略该版本
      if(localVersion){
        log.info(`当前版本:${localVersion}, 发现新版本${remoteVersion}`,'开始更新')
      }else{
        log.info(`开始安装${remoteVersion}`)
      }
     
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
