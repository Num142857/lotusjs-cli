var spawn = require('child_process').spawn;

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
          spawn(`npm`, ['publish', '--registry', 'https://registry.npm.taobao.org'], {
            cwd: process.cwd(),
            stdio: 'inherit'
          });
          break;

        case 'adduser':
          spawn(`npm`, ['adduser', '--registry', 'https://registry.npm.taobao.org'], {
            cwd: process.cwd(),
            stdio: 'inherit'
          });
          break;

        case 'install':
          cmd = ['install']
          config = ['--registry', 'https://registry.npm.taobao.org']
          arg = cmd.concat(answers.arg)
          arg = arg.concat(config)
          // console.log(arg)
          spawn(`npm`, arg, {
            cwd: process.cwd(),
            stdio: 'inherit'
          });
          break;

        case 'info':
          cmd = ['info']
          config = ['--registry', 'https://registry.npm.taobao.org']
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