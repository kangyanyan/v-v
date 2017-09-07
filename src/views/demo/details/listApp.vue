<template>
  <div>
		此处是Id值：
  	 <input type="text" :value="Id">
		<router-link to='/'>
  	 再切换回来 
  	</router-link>
		
  </div>
</template>

<script>
	export default{
		data(){
			var id = this.$route.params.id
		return{
			Id:id
		}
	},
	// creates(){
	// 	var id = this.$route.params.id
	// },
	props:["id"]
	}
</script>

<style>

</style>
