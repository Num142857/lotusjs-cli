var inquirer = require('inquirer')
var spawn = require('child_process').spawn;
const shelljs = require('shelljs');
const process = require('process');
const fse = require('fs-extra');

module.exports = {
    async init(type, src){
        // 根据项目配置文件,找到相应的命令行. 执行选择模板类型的交互式命令行
        try {
            let appinfo = await fse.readJson(process.cwd() + '/package.json')
            spawn(`${appinfo.scaffold}`, ['g', type , src], {
                cwd: process.cwd(),
                stdio: 'inherit'
            });
        } catch (error) {
            log.warn(error)
        }
    },
    async execute (){
        // 根据项目配置文件,找到相应的命令行. 执行选择模板类型的交互式命令行
        try {
            let appinfo = await fse.readJson(process.cwd() + '/package.json')
            spawn(`${appinfo.scaffold}`, ['g', 'generateList'], {
                cwd: process.cwd(),
                stdio: 'inherit'
            });
        } catch (error) {
            log.warn(error)
        }
    }
}

