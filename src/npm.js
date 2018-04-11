var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');

module.exports = {
  config: [{
    type: 'list',
    name: 'do',
    message: 'What do you want to do?',
    choices: ['publish','adduser']
  }, ],
  callback: async function (answers) {
      console.log(answers)
    //   return
      switch (answers.do) {
          case 'publish':
          spawn(`npm`, ['publish', '--registry','http://npm.jc'], {
            cwd: process.cwd(),
            stdio: 'inherit'
        });
          break;

          case 'adduser':
          spawn(`npm`, ['adduser', '--registry','http://npm.jc'], {
            cwd: process.cwd(),
            stdio: 'inherit'
        });
          break;

          case 'install':
          spawn(`npm`, ['install', '--registry','http://npm.jc'], {
            cwd: process.cwd(),
            stdio: 'inherit'
        });
          break;
      }
  }
}