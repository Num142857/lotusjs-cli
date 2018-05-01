var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');
const download = require('download-git-repo');
const fse = require('fs-extra')
var fs = require('fs')

module.exports = {
    config: [{
        type: 'list',
        name: 'do',
        message: 'What do you want to do?',
        choices: ['初始化', '更新']
    }, ],
    callback: async function (answers) {
        try {
            switch (answers.do) {
                case '初始化':
                    log.info('正在初始化你的脚手架')
                    let exist = await fse.ensureDir(process.cwd() + "/_lotus")

                    if (!exist) {
                        log.warn('文件夹_lotus已存在,作业停止');
                        return
                    }
                    this.downloadRepo('init')
                    break;

                case '更新':
                    let questions = await inquirer.prompt([{
                        type: 'list',
                        name: 'do',
                        message: `更新会直接覆盖掉原脚手架核心代码.如果之前有过修改,请做好备份.
  现在是否更新你的脚手架`,
                        choices: ['是', '否']
                    }]);
                    if (questions === '否') return;
                    log.info('正在更新你的脚手架核心代码')
                    this.downloadRepo('update')
                
                    break;
            }
        } catch (error) {
            console.log(error)
        }

    },
    async downloadRepo(type){
        let temp_dir = process.cwd() + "/temp_lotus";
        let target_dir = process.cwd() + "/_lotus";
        download('github:Fantasy9527/lotus-scaffold', temp_dir, async (err) => {
            if (err) {
                log.warn(err);
                return
            }
            switch (type) {
                case 'init':
                //初始化,全部复制
                    await fse.copy(temp_dir + "/_lotus/", target_dir + "/")
                    break;

                case 'update':
                //更新,部分复制
                    await fse.copy(temp_dir + "/_lotus/bin", target_dir + "/bin")
                    break;
            }
            

            // package.json 是否覆盖
            let packageExist = fs.existsSync(`${process.cwd()}/package.json`)
            if (!packageExist){
                await fse.copy(temp_dir + "/package.json", target_dir + "/")
            }
            this.generatePackage()
            await fse.remove(temp_dir)
            log.info('脚手架已经准备完毕,尽情使用吧~')
        })
    },
    async generatePackage() {
        let packagePath = `${process.cwd()}/package.json`
        let pathArr = process.cwd().split('/')
        let appName = pathArr[pathArr.length - 1]
        let packageExist = fs.existsSync(packagePath)
        console.log('是否存在', packageExist, packagePath)
        if (packageExist) {
            //修改文件
            let appinfo = await fse.readJson(packagePath)
            appinfo.bin = {}
            appinfo.name = appName
            appinfo.scaffold = appName
            appinfo.bin[appName] = "_lotus/bin/index.js"
            await fse.writeJson(packagePath, appinfo, {
                spaces: 4
            })
        } else {
            //重新生成
            let newAppInfo = {
                "name": appName,
                "scaffold": appName,
                "version": "0.0.1",
                "bin": {}
            }
            newAppInfo.bin[appName] = "_lotus/bin/index.js"
            await fse.writeJson(packagePath, newAppInfo, {
                spaces: 4
            })
        }

    }
}