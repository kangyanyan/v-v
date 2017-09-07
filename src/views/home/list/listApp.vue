<template>
<div>
	<!-- headbar -->
	<mt-header fixed title="just a demo"></mt-header>
	 
	 <div class="temp">
		 <a href="../demo/details.html">多页面跳转</a>
		 <div><a href="../family/alert.html">alert页面</a></div>
	 	<div><a href="../family/calendar.html">calendar页面</a></div>
	 	<div><a href="../family/button.html">button页面</a></div>
	 </div>
		 
		 <Form></Form>
	 
	<!-- tabbar 
	<nav class="mui-bar mui-bar-tab ">
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">2页</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">3页</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">4页</span>
			</a>
		</nav>-->
	</div>
	
</template>

<script>
	import Form from '../../../components/Form.vue'

	export default{
		components:{
			Form
		}
	}
</script>

<style scoped>
	//import './../../../assets/mui/mui.css'
	.temp{
		margin-top: 100px;
	}
    
</style>
