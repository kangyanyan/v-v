<template>
<!-- 这个文件夹下的vue文件是演示父组件下两个同级的子组件传值的demo -->
  <div id="app">
    <secondChild></secondChild>
    <firstChild></firstChild>
  </div>
</template>
<script>
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

export default {
  name: 'app',
  components: {
    FirstChild,
    SecondChild,
  }
}
</script>

<style scoped>

 
</style>
