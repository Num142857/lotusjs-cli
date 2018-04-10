var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');

module.exports = {
  config: [{
    type: 'list',
    name: 'do',
    message: 'What do you want to do?',
    choices: ['publish','add user']
  }, ],
  callback: async function (answers,type) {
      console.log(answers)
    //   return
      switch (answers.do) {
          case 'publish':
          spawn(`npm`, ['publish', '--registry','http://npm.jc:4873'], {
            cwd: process.cwd(),
            stdio: 'inherit'
        });
          break;

          case 'add user':
          spawn(`npm`, ['adduser', '--registry','http://npm.jc:4873'], {
            cwd: process.cwd(),
            stdio: 'inherit'
        });
          break;
      
      }


  }
}