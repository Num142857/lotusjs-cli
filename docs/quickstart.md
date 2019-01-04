
# 快速入门

> 一个交互式Javascript脚手架管理工具

## 安装与更新
依赖环境:
* Nodejs 8.0及以上版本
* Mac/Linux/Windows

安装:
```bash
npm install lotusjs-cli -g
```

大陆用户:
```bash
cnpm install lotusjs-cli -g
```

## 使用
进入项目目录

```bash
> $ lo
? What do you want to do? (Use arrow keys)
❯ 项目模板
  项目初始化
  脚手架
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
```bash
lo init micro-react
// or
lo i micro-react
```

## 生成模板代码
进入项目目录,选择 `项目模板` 再选择该脚手架提供的模板类型

```bash
$ lo
? What do you want to do? 项目模板
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
选择 `npm`

```bash
? What do you want to do?
  项目模板
  项目初始化
  脚手架
❯ npm
  今日运势
```
### 发布私有包
进入项目根目录
选择 `publish`
```
? What do you want to do? npm
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
? What do you want to do? npm
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

## 脚手架管理
新建一个名称为`lotus-scaffold-你的项目名`的项目,
> 所有lotus脚手架的前缀必须是 `lotus-scaffold`

```bash
mkdir lotus-scaffold-你的项目名
cd lotus-scaffold-你的项目名
lo
? What do you want to do?
  项目模板
  项目初始化
❯ 脚手架
  npm
  今日运势
```

选择脚手架初始化,或者更新你的脚手架部分代码
```bash
? What do you want to do? 脚手架
? What do you want to do? (Use arrow keys)
❯ 初始化
  更新
```
选择初始化后,程序会生成`lotusjs`脚手架的标准代码

## 查看今天运势
```bash
$ lo
? What do you want to do? 今日运势

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