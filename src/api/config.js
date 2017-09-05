import Qs from 'qs'
import {getUrl} from '../assets/js/BaseJS.js'
var r=JSON.parse(sessionStorage.getItem('uInfo'));
if(!r||!r.homeid){//链接获取参数
	var link=window.location.href;
	var parseUrl = getUrl(link);
	if(parseUrl.userInfo)var userInfo = JSON.parse(window.decodeURIComponent(parseUrl.userInfo));//获得用户头像 昵称 测试使用
	if(!r){//进入转发首页 rs || 进入管理页面
		var r={'id':parseUrl.openid,'ssid':parseUrl.ssid,'mssid':parseUrl.homeId,"userType":parseUrl.userType}
	}else if(!r.homeid){//通过转发页面-进入到购买页面 mss 
		r.homeid=parseUrl.openId;
	}
	sessionStorage.setItem('uInfo',JSON.stringify(r))//设置userOpenid  mssid
}
export default{
	  url: '/call',  
	  baseURL: 'http://saletest.wx.tkzj.taikang.com',//?? ip地址
	  method:'POST',
	  transformResponse: [function (data) {
	      return data
	  }],
	  headers: {'Content-Type':'application/json'},
	  params: {
	  	timestamp:''
	  },
	  paramsSerializer: function(params) {
	    return Qs.stringify(params)
	  },
	data: {
		openid:r?r.id:"",
	    group:'controller.tj',
	    method:'',
	    custData:{}
	},
	//timeout: 5000,
	withCredentials: false, // default
	responseType: 'json', // default
	onUploadProgress: function (progressEvent) {
	    // Do whatever you want with the native progress event
	},
	onDownloadProgress: function (progressEvent) {
	    // Do whatever you want with the native progress event
	},
	maxContentLength: 10000,
	validateStatus: function (status) {
	    return status >= 200 && status < 300; // default
	},
	maxRedirects: 5 // default
}
