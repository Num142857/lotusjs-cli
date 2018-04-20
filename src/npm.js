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
    let config, arg,cmd;
    try {
      switch (answers.do) {
        case 'publish':
          spawn(`npm`, ['publish', '--registry', 'http://npm.jc'], {
            cwd: process.cwd(),
            stdio: 'inherit'
          });
          break;

        case 'adduser':
          spawn(`npm`, ['adduser', '--registry', 'http://npm.jc'], {
            cwd: process.cwd(),
            stdio: 'inherit'
          });
          break;

        case 'install':
          cmd = ['install']
          config = ['--registry', 'http://npm.jc']
          arg = cmd.concat(answers.arg)
          arg = arg.concat(config)
          console.log(arg)
          spawn(`npm`, arg, {
            cwd: process.cwd(),
            stdio: 'inherit'
          });
          break;

        case 'info':
          cmd = ['info']
          config = ['--registry', 'http://npm.jc']
          arg = cmd.concat(answers.arg)
          arg = arg.concat(config)
          spawn(`npm`, arg, {
            cwd: process.cwd(),
            stdio: 'inherit'
          });
          break;
      }
    } catch (error) {
      console.log(error)
    }

  }
}