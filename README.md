# 前言

前些日子抽空学习了下react，因为近期忙着找工作，没时间写博客，今天我们就来看看用react全家桶，构建一个项目把，可能我学的也不是特别好，但是经过各种查资料，总算是能够构建出一个像模像样的栗子了。

github地址：https://github.com/hua1995116/react-shopping

## 脚手架

[generator-react-webpack](https://www.npmjs.com/package/generator-react-webpack)

**Installation**

```
npm install -g yo
npm install -g generator-react-webpack
```

**Setting up projects**

```
# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project
 
# Run the generator
yo react-webpack
```

## 技术栈

react+react-router+redux+ webpack + ES6 + fetch+antd

## 项目结构

```
│  .babelrc
│  .editorconfig
│  .eslintrc
│  .gitignore
│  .yo-rc.json
│  karma.conf.js
│  package.json
│  prod.server.js
│  server.js
│  shop.json
│  tree.txt
│  webpack.config.js
│  
├─cfg
│      base.js
│      defaults.js
│      dev.js
│      dist.js
│      test.js
│      
├─dist
│          
├─src
│  │  favicon.ico
│  │  index.html
│  │  index.js
│  │  routes.js
│  │  
│  ├─actions
│  │      index.js
│  │      README.md
│  │      
│  ├─api
│  │      shop.json
│  │      
│  ├─components
│  │      Destination.js
│  │      Detail.js
│  │      Index.js
│  │      Main.js
│  │      Plan.js
│  │      
│  ├─config
│  │      base.js
│  │      dev.js
│  │      dist.js
│  │      README.md
│  │      test.js
│  │      
│  ├─constants
│  │      ActionTypes.js
│  │      
│  ├─images
│  │      
│  ├─reducers
│  │      cart.js
│  │      count.js
│  │      history.js
│  │      index.js
│  │      
│  ├─sources
│  │      
│  ├─stores
│  │      
│  └─styles
│          App.css
│          
└─test
            
```

## 目标功能

- [x] 商品浏览页面 -- 完成
- [x] 商品详细页面-- 完成
- [x] 购物车页面-- 完成
- [x] 历史记录页面 -- 完成

## 项目运行
**注意：由于涉及大量的 ES6 等新属性，nodejs 必须是 6.0 以上版本 。**
```
git clone https://github.com/hua1995116/react-shopping.git 

cd react-shopping

npm install

npm run start //运行

npm run dist //打包
```
## 说明
>如果本项目对于你有帮助，请顺手进github点个star

>该项目已经在windows 7和mac进行测试。

> 推荐一个vue2 的实战项目（仿网易云音乐） [http://blog.csdn.net/blueblueskyhua/article/details/68156734](http://blog.csdn.net/blueblueskyhua/article/details/68156734)

> 另外推荐一个 vue2 + vuex 的实战项目（实时聊天系统，有后台代码）。[http://blog.csdn.net/blueblueskyhua/article/details/70807847](http://blog.csdn.net/blueblueskyhua/article/details/70807847)

>如果有什么更好的建议或者问题，请及时再下方评论留言。


## 效果演示

[http://www.huayifeng.top:8080](http://www.huayifeng.top:8080)

## 核心代码说明

> **"react": "^15.0.0"**
原本的 react package 被拆分为 react 及 react-dom 两个 package
详细看官方api： [https://facebook.github.io/react/](https://facebook.github.io/react/)

>**"react-router": "^4.1.1"**
React Router V4 基于 Lerna 管理多个 Repository。在此代码库包括：
 - react-router React Router 核心
 - react-router-dom 用于 DOM 绑定的 React Router
 - react-router-native 用于 React Native 的 React Router
 - react-router-redux React Router 和 Redux 的集成
 - react-router-config 静态路由配置帮助助手
api ：[https://reacttraining.com/react-router/web/guides/quick-start](https://reacttraining.com/react-router/web/guides/quick-start)

src/index.js
```
import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom' // 14.0版本后拆分成react和react-demo
import { createStore ,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Main from './components/Main'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import 'antd/dist/antd.css'

import './styles/App.css'
import { getAllProducts } from './actions'

const middleware = [ thunk ] // redux-thunk解决异步回调
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer,
  applyMiddleware(...middleware) // 中间件
)

store.dispatch(getAllProducts()) //获取全部商品
// Render the main component into the dom
ReactDOM.render(
   <Provider store={ store } >
     <Main />
   </Provider>
  ,document.getElementById('app')
)
```

主要定义了一些依赖。以及主入口模版文件Main.js

src/components/Main.js
```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import Index from './index'
import Destination from './Destination'
import Plan from './Plan'
import Detail from './Detail'
import {Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu

const Basic = () => (

  <Router >
    <div className="clear container-main">
      <div className="fl">
        <Menu
          style={{width: 240}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail"/><span>操作</span></span>}>
            <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">购物车</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/topics">购买记录</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>

      <Route exact path="/" component={Index}/>
      <Route path="/about" component={Destination}/>
      <Route path="/topics" component={Plan}/>
      <Route path="/detail/:topicId" component={Detail} />
    </div>
  </Router>
)

export default connect()(Basic)
```
运用了函数式编程方式：
我们可以看看普通继承和函数式编程的差异，函数编程简洁了不少。也可以看到react-router在4.0版本后发生了一些变化。
![这里写图片描述](http://img.blog.csdn.net/20170525130009551?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## 效果图
![这里写图片描述](http://img.blog.csdn.net/20170525133053530?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20170525133118375?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20170525133131593?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20170525133144187?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20170525133157422?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
