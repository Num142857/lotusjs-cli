#!/usr/bin/env node
var inquirer = require('inquirer')
const program = require('commander');
const util = require('lotusjs-util')
const appInfo = require('../package.json')
var scaffoldInit = require('../src/scaffoldInit')
var generate = require('../src/generate')
var coderCalendar = require('../src/coderCalendar')
var npm = require('../src/npm')
var scaffoldUpdate = require('../src/scaffoldUpdate')

global.log = util.log;
global.exec = util.exec;

program.version(appInfo.version, '-v, --version')

program
  .command('init')
  .alias('i')
  .description('初始化你的项目')
  .arguments('<name>')  //[]:可选  <>:必选
  .action((name)=>{
    scaffoldInit.callback(name,'cmd')
    process.exit(1);
  });

program
  .command('generate')
  .alias('g')
  .description('模板生成')
  .arguments('<type> [src]')  //[]:可选  <>:必选
  .action((type, src)=>{
    generate.init(type, src)
    process.exit(1);
  });
program
  .command('publish')
  .description('发布私有包')
  .action((type, src)=>{
    npm.callback({ do:'publish'})
    process.exit(1);
  });

program
  .command('adduser')
  .description('登录或者注册')
  .action((type, src)=>{
    npm.callback({ do:'adduser'})
    process.exit(1);
  });

program
  .command('install [otherName...]')
  .description('从私有库安装npm包')
  .option('-s --save', 'true')
  .option('-g --global','true')
  .action((otherName, cmd)=>{
    if (cmd.save) otherName.push('--save')
    if (cmd.global) otherName.push('-g')
    npm.callback({ do: 'install', arg: otherName})
    process.exit(1);
    
  });

program
  .command('info [otherName...]')
  .description('从私有库查看npm包详细信息')
  .action((otherName, cmd)=>{
    npm.callback({ do: 'info', arg: otherName})
    process.exit(1);
  });

// program
//   .command('*')
//   .description('从私有库查看npm包详细信息')
//   .action((otherName, cmd)=>{
//     npm.callback({ do: 'info', arg: otherName})
//     process.exit(1);
//   });

program.parse(process.argv);
// console.log(program.save)
inquirer
  .prompt([{
    type: 'list',
    name: 'do',
    message: 'What do you want to do?',
    choices: ['项目模板', '项目初始化', '脚手架','private npm', '老黄历'],
  },
  ])
  .then(answers => {
    switch (answers.do) {
      case '项目初始化':
        inquirer.prompt(scaffoldInit.config).then(answers => { scaffoldInit.callback(answers) })
        break;
      case '项目模板':
        generate.execute()
        break;
      case '老黄历':
        coderCalendar.init()
        break;
      case 'private npm':
      inquirer.prompt(npm.config).then(answers => { npm.callback(answers) })
        break;
      case '脚手架':
        inquirer.prompt(scaffoldUpdate.config).then(answers => { scaffoldUpdate.callback(answers) })
        break;
    }
  });