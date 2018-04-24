# 手把手教你制作lotus脚手架

## 脚手架初始化
新建一个名称为`lotus-scaffold-你的项目名`的项目,
> 所有lotus脚手架的前缀必须是 `lotus-scaffold`

```bash
mkdir lotus-scaffold-demo
cd lotus-scaffold-demo
lo
? What do you want to do?
  项目模板
  项目初始化
❯ 脚手架
  private npm
  老黄历
```

选择脚手架初始化,或者更新你的脚手架部分代码
```bash
? What do you want to do? 脚手架
? What do you want to do? (Use arrow keys)
❯ 初始化
  更新
```
选择初始化后,程序会生成`lotusjs`脚手架的标准代码

目录:
```
.
└── _lotus
    ├── bin //命令行索引相关代码
    │   ├── generate.js
    │   ├── index.js
    │   └── init.js
    ├── config.js //模板配置
    └── template
        └── example //模板示例代码
            ├── index.js
            ├── store.js
            ├── style.less
            └── template.json //当前模板配置文件

```

## 开始你的脚手架
在`lotus-scaffold-demo`,你可以随意添加你的脚手架模板代码.
我们手动添加以下结构:

```
├── _lotus
├── scripts
├── style
├── index.html
└── README.md
```

随后我们打开`/_lotus/config.js`文件,添加以下代码
```javascript
module.exports={
    "files":[
        "scripts/",
        "style/",
        "index.html",
        "README.md"
    ]
}
```

`files` 这个数组里,就是我们刚刚创建的那几个文件与文件夹.
也就是我们需要脚手架使用的时候自动生成的内容

就这样,我们完成了我们的第一个`lotus`脚手架

## 支持所有的脚手架
所以我们可以很方便的完成我们各种需求的脚手架搭建.
也可以在现在开源社区所有流行的脚手架,根据自己需求重新调整之后.
用lotus包装一下,便可以在各种项目中使用你的脚手架模板代码了