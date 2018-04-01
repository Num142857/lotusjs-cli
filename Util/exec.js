const shelljs = require('shelljs');

module.exports=(cmd)=>{
  return  new Promise(function(resolve,reject){
      let shell = shelljs.exec(cmd)
        if(shell.code ===0){
            resolve('done')
        }else{
            reject()
        }
    })
}