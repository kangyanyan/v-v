<template>
  <div class="child">
    <h1>子组件</h1>
    <button v-on:click="cTop">子To父</button>
  </div>
</template>
<script>
  export default{
    name: 'child',
    data(){
      return {}
    },
    methods: {
      cTop(){
        this.$emit("cTop", "子组件传值给父组件");
      }
    }
  }
</script>