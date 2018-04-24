var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');
const download = require('download-git-repo');

module.exports = {
    config: [{
        type: 'list',
        name: 'do',
        message: 'What do you want to do?',
        choices: ['初始化', '更新']
    },],
    callback: async function (answers) {
        try {
            switch (answers.do) {
                case '初始化':
                    log.info('正在初始化你的脚手架')
                    download('github:Fantasy9527/lotus-scaffold', process.cwd(), function (err){
                        if (err) { log.warn(err); return}
                        log.info('下载成功')
                    })
                    break;

                case '更新':
                    let questions = await inquirer.prompt([{
                        type: 'list',
                        name: 'do',
                        message: `更新会直接覆盖掉原脚手架代码.如果之前有过修改,请做好备份.
  现在是否更新你的脚手架`,
                        choices: ['是', '否']
                    }]);
                    if (questions === '否') return;
                    log.info('正在更新你的脚手架')
                    download('github:Fantasy9527/lotus-scaffold', process.cwd(), function (err) {
                        if (err) { log.warn(err); return }
                        log.info('更新成功')
                    })
                    break;
            }
        } catch (error) {
            console.log(error)
        }

    }
}