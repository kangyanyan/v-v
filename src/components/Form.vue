 <template>
<div>
      <form class="mui-input-group">
    <div class="mui-input-row">
        <label>用户名</label>
    <input type="text" class="mui-input-clear" placeholder="请输入用户名" :value="formData.name">
    </div>
    <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入密码" :value="formData.name">
    </div>
    <div class="mui-button-row">
        
        <button type="button" class="mui-btn mui-btn-primary" >确认</button>
        
        <button type="button" class="mui-btn mui-btn-danger" >取消</button>
    </div>
</form>
</div>
</template>
<style scoped>
      
</style>
<script type=text/ecmascript-6>
export default {
      props:["formData"]
}
</script>