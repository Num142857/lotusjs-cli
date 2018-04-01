const shelljs = require('shelljs');
const chalk = require('chalk');
const moment = require('moment');
let path = require('path')


module.exports = {
    base(color,logType,...arg) {
        let time = chalk[color](moment().format())
        let type = chalk[color](logType)
        let paths = chalk[color](__filename)
        let args = [time,type,paths];
        for (const iterator of arg) {
            args.push(chalk[color](iterator))
        }
        console.log.apply(null, args);
      },
      info(){
          return this.base('green','info',...arguments)
      },
      warn(){
          return this.base('red','warn',...arguments)
      }
    }