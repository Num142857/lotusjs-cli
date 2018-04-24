var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');
const download = require('download-git-repo');
const fse = require('fs-extra')
var fs= require('fs')

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
                    let exist =  await fse.ensureDir(process.cwd()+"/_lotus")
                    
                    if(!exist){log.warn('文件夹_lotus已存在,作业停止');return}
                    download('github:Fantasy9527/lotus-scaffold', process.cwd(), (err)=>{
                        if (err) { log.warn(err); return}
                        this.generatePackage()
                        log.info('脚手架初始化完成')
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
                    log.info('正在更新你的脚手架核心代码')
                    let temp_dir = process.cwd()+"/temp_lotus";
                    let target_dir = process.cwd()+"/_lotus";
                    download('github:Fantasy9527/lotus-scaffold', temp_dir,async  (err)=> {
                        if (err) { log.warn(err); return }

                       let copy_bin =  await fse.copy(temp_dir+"/_lotus/bin", target_dir+"/bin")
                       
                       this.generatePackage()
                       await fse.remove(temp_dir)
                       log.info('脚手架核心代码更新完成')
                    })
                    break;
            }
        } catch (error) {
            console.log(error)
        }

    },
   async generatePackage(){
        let packagePath = `${process.cwd()}/package.json`
        let pathArr = process.cwd().split('/')
        let appName = pathArr[pathArr.length-1]
        let packageExist = fs.existsSync(packagePath)

          if(packageExist){
            let appinfo = await fse.readJson(packagePath)
            appinfo.bin = {}
            appinfo.name = appName
            appinfo.bin[appName] ="_lotus/bin/index.js"
            await fse.writeJson(packagePath, appinfo,{spaces:4})
          }else{
            let appinfo = {
                "name": appName,
                "version": "0.0.1",
                "bin":{}
            }
            appinfo.bin[appName] ="_lotus/bin/index.js"  
            await fse.writeJson(packagePath, appinfo,{spaces:4})
          }

    }
}