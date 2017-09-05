## 使用前注意事项
1. `npm run dev`将会自动在浏览器打开页面`http:// localhost:8091/views/home/list.html`
2. 默认打开的页面设置在build/dev-server.js里
3. src\views\一级目录\二级目录\。。。各种文件：此处目录结构不能变，自己的模块必须写在二级目录下
4. 跳转到另一个目录的名称写成：例`../router/details.html`,二级目录名不用写
5. views这个文件名称不能擅自修改，如果改了，到config\index.js修改`moduleName`参数
6. 此架子只支持vue2.0版本
7. 架子借鉴于：https://github.com/bluefox1688/vue-cli-multi-page

## Build Setup
``` bash
# 安装依赖
npm install

# 调试环境 serve with hot reload at localhost:8091
npm run dev

# 生产环境 build for production with minification
npm run build

```
本地默认访问端口为8091，需要更改的童鞋请到项目目录文件`config/index.js`修改。

## 目录结构
``` 
webpack
 |---build
 |---src
     |---api    #各种接口文件
     |---assets    #公共资源
        |---css 
        |---font 
        |---js 
        |---image
     |---components 公共组件    
     |---views    # 放置各个页面模块，模块名可自定义
        |---home    #一级目录
           |---list    #二级目录
              |---list.html
              |---list.js
              |---listApp.vue
     |---filters    #定义的全局过滤器
     |---utils    #各种基本配置以及工具类
       
......
     
注：在`view`里二级文件夹，一个文件夹就是一个html，`js``vue``html` 都统一放在当前文件夹里，也可以继续放其他的资源，如css、图片等，webpack会打包到当前模块里。
  ```
 
