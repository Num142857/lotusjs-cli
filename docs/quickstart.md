
# 快速入门

> An awesome project.

## 安装与更新
依赖环境:
* Nodejs 8.0及以上版本
* Mac/Linux/Windows

安装:
```
npm install lotusjs-cli -g
```

大陆用户:
```
cnpm install lotusjs-cli -g
```

## 使用
进入项目目录

```bash
> $ lo
? 你要干嘛? (Use arrow keys)
❯ 生成该项目的模板代码
  项目初始化
  脚手架项目初始化
  脚手架版本管理
  占卜
```

选择你想要做的事情,回车就会开始任务.



## 项目初始化
 选择 `项目初始化`后进入:

```bash
? 你要干嘛? 项目初始化
? 你需要初始化什么框架？ (Use arrow keys)
  -----微前端系列
❯ micro-react
  micro-vue
  micro-angular
  -----react系列
  react
  react-antd
(Move up and down to reveal more choices)
```

选择这上面已有的框架,直接初始化你的项目了

或者直接命令安初始化你的项目
```
lo init micro-react
// or
lo i micro-react
```

## 生成模板代码