#!/usr/bin/env node
var inquirer = require('inquirer')
var  scaffoldInit = require('./scaffoldInit')
const util = require('lotusjs-util')
global.log = util.log;
global.exec = util.exec;
inquirer
  .prompt([{
      type: 'list',
      name: 'do',
      message: '你要干嘛?',
      choices: ['提交代码', '生成模板代码', '项目初始化', '发布代码','依赖更新' ,'占卜'],
    },
  ])
  .then(answers => {
      switch (answers.do) {
          case '项目初始化':
          inquirer.prompt(scaffoldInit.config).then(answers=>{scaffoldInit.callback(answers)})
           break;
      }
  });
