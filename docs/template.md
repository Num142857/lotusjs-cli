# 代码模板
在项目开发中,我们会经常的新建一个代码结构相同的文件.
这样子就避免不了很多的重复的代码复制粘贴.还有可能导致各种操作不规范与问题.

lotus脚手架管理工具提供了自定义生成模板代码的功能.
我们只需要简单的配置一下,便可完成你的模板代码添加了.

## 例子: 添加一个组件

就拿react开发来说,我们会经常的添加一个Mobx组件,比如下面的代码

```javascript
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from './store'
import style from './style.less'
import { Row, Col, Button } from 'antd'

@observer
export default class Demo extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    static defaultProps = {}
    
    componentWillMount() {}
    
    componentWillReceiveProps(nextProps) {}
    render() {
        return(<div>Demo</div>)
    }
  }
```

与其配套的代码还有:
### store.js

```javascript
import { observable, useStrict, action, runInAction } from 'mobx'
useStrict(true)

class DemoStore {

    @observable initData = {}

    @action.bound handle = ()=>{ }

    @action.bound asyncHandle = async()=>{ }

  }
  
export default new DemoStore()
  
```

### style.less
```css
.Demo {
    
}
```
这还只是一个非常简单的组件,在日常的现实开发中的场景会比以上代码结构复杂的多.

## 改造
为了让重复工作变得简单与规范,我们只需要对其进行以下修改
1. 进入`/_lotus/template/`文件夹
2. 创建一个文件夹,名称为:`Component`
3. 创建一个`template.json`的模板描述文件
```json
{
    "type": "component",  //该模板的名称
    "message": "开始生成Component" //在lotus生成模板代码的时候,控制台输出的消息
}
```

4. 将这三个文件复制到该文件夹下并且修改其内容为:

将所有与组件名称相关的名字用 `{{componentName}}` 替换,便于后期填充与代码文件的生成.

index.js
```javascript
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from './store'
import style from './style.less'
import { Row, Col, Button } from 'antd'

@observer
export default class {{componentName}} extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    static defaultProps = {}
    
    componentWillMount() {}
    
    componentWillReceiveProps(nextProps) {}
    render() {
        return(<div>{{componentName}}</div>)
    }
  }
```


store.js

```javascript
import { observable, useStrict, action, runInAction } from 'mobx'
useStrict(true)

class {{componentName}} {

    @observable initData = {}

    @action.bound handle = ()=>{ }

    @action.bound asyncHandle = async()=>{ }

  }
  
export default new {{componentName}}()
  
```

style.less
```less
.{{componentName}} { }
```

就这样完成了一个简单的模板代码的配置