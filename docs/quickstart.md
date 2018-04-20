
# 快速入门

> 一个意外到让你尖叫的交互式前端通用脚手架管理工具

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
? What do you want to do? (Use arrow keys)
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
? What do you want to do? 项目初始化
? 哪一个才是你的选择？ (Use arrow keys)
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
进入项目目录,选择 `生成该项目的模板代码` 再选择该脚手架提供的模板类型

```bash
$ lo
? What do you want to do? 生成该项目的模板代码
? 选择你要初始化的模板类型 (Use arrow keys)
❯ component
  page
```

或者
```bash
lo generate <模板类型> [生成模板代码的路径]
lo generate page src/model/my-new-page
```

简写:
```bash
lo g <模板类型> [生成模板代码的路径]
lo g page src/model/my-new-page
```

## 内部私有npm包管理
选择 `private npm`

```bash
? What do you want to do?
  生成该项目的模板代码
  项目初始化
  脚手架项目初始化
  脚手架版本管理
❯ private npm
  程序员老黄历
```
### 发布私有包
进入项目根目录
选择 `publish`
```
? What do you want to do? private npm
? What do you want to do? (Use arrow keys)
❯ publish
  add user
```
或者直接命令行:
```bash
lo publish
```
### 登录或者注册私有npm
选择  `add user`
```
? What do you want to do? private npm
? What do you want to do? (Use arrow keys)
  publish
❯ add user
```
或者直接命令行:
```bash
lo adduser
```
### 从私有库安装依赖
根据package.json安装
```bash
lo install
```

指定安装

```bash
lo install pm2
```

批量安装

```bash
lo install pm2 react
```

支持save

```bash
lo install pm2 react  --save
```

全局安装

```bash
lo install pm2 react  -g
```


### 支持查看私有库npm包详情
```bash
lo info pm2
```

## 本地脚手架版本管理


## 查看今天运势
```bash
$ lo
? What do you want to do? 程序员老黄历

        现在是2018年4月10日星期二晚上6点52分
        ---------------------------------
        宜:

            招人:你面前这位有成为牛人的潜质

            重构:代码质量得到提高

            跳槽:该放手时就放手


        忌:

            白天上线:可能导致灾难性后果

            申请加薪:公司正在考虑裁员

            晚上加班:他妈的晚上又要加班


       ----------------------------------
        座位朝向:面向西北方写程序，BUG 最少
        今日宜饮: 可乐
```