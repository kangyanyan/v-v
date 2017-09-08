## vue 传值方法总结
- 无关系--兄弟组件---跳转传值（demo是views/demo模块）

 1. 点击跳转的页面：<router-link to="/home/id值">跳转时把值传过去,在路径后拼上要传的值</router-link>

 2. 接收值的页面--路由：{name:'home',path:'/home/:id,component:Home'}（:为占位符）

 3. /home页面--接收值：1、var id = this.$route.params.id 通过this.$route.params参数来接收）
                      2、props:["id"]


- 父组件向子组件传值（demo是views/home模块）

 1. 首先，子组件用props:['swipeData']来接收传过来的值 （swipeData是子组件内存储数据的变量）

 2. 父组件内：1、` <Swipe :swipeData="lunboData"></Swipe>` 2、import Swipe from  '../../../components/Swipe' （lunboData是父组件内存储数据的变量）3、 components:{Swipe}


 - 子组件向父组件传值（demo是views/demo模块）
  
  1. 父组件：1、` <Child :cTop="showChild" ></Child>` 2、import Child from './Child.vue' （showChild是父组件内存储数据的变量）3、 components:{Child}

  2. 子组件：` <button v-on:click="cToop">子To父</button>` （cTop是子组件内存储数据的变量）
      ```
    methods: {
      cToop(){
        this.$emit("cTop", "子组件传值给父组件");
      }
    }
      ```

- 父组件下两个同级的子组件传值（demo是views/family/calendar模块）

 1. 先建立一个用来传值的公共对象：eventBus.js--> import Vue from 'Vue'  export default new Vue()

 2. 在父组件中引入两个子组件，步骤同上：1、<子组件></子组件> 2、import引入 3、componemts:{子组件}

 3. 子组件一传值：import bus from './eventBus';  bus.$emit('msgData', this.message);

 4. 子组件二接受值： 1、 import bus from './eventBus';
    ```
    2、  data(){
            return {
                message: ''
            }
        },
        mounted(){
            var self = this;
            bus.$on('userDefinedEvent',function(message){
                self.message = message;//接值
            });
        }
    ```
 - 后记：第一种传值方式传输数据量小，数据暴露在url中，所以大量数据传输用session更合适，其他三种传值方法只适用于嵌套关系的组件

    

