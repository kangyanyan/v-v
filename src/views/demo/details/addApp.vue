<template>
<!-- 此文件和同级目录下的Child是子组件向父组件传值的demo! -->
  <div>
   
  	根组件。。。。。。
  	<router-link to='/list/12'>
  	 路由切换 
  	</router-link>
  	<div class="parent">
    <h1>父组件</h1>
    <Child v-on:cTop="showChild" ></Child>
  </div>
 
  </div>
</template>

<script>
import Child from './Child.vue'
  export default{
      name:"parent",
    data(){
      return {
      }
    },
    methods: {
      showChild:function(data){
        alert("父组件显示信息："+data)
      }
    },
    components: {Child}
  }
  
</script>

<style>

</style>
