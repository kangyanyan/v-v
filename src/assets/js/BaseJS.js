/**
 * 基本方法
 * @type {Object}
 */

var BaseJS={
    //获取url参数
    getParameter: function(param) {
        var query = window.location.search.substring(1).split("&").uniquelize().del("");
        var iLen = query.length;
        var a = {};
        for (var i = 0; i < iLen; i++) {
            a[(query[i].split("="))[0]] = (query[i].split("="))[1]
        }
        if (param && param != "") {
            return a[param] ? a[param] : "";
        };
        return a;
    },
    // 写入cookie信息
    setCookie: function(name, value, hour) {
        var exp = new Date();
        exp.setTime(exp.getTime() + hour * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
    },
    // 获取cookie信息
    readCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length))
            }
        }
        return null
    },
    //操作localStorage，有val是存储，没有是获取，为空是删除
    LocaGS: function(name, val) {
        if (val) {
            // if (val instanceof Object) {
            //   val = JSON.stringify(val)
            // };
            localStorage.setItem(name, val);
        } else {
            if (val === "") {
                localStorage.removeItem(name);
            } else {
                if (localStorage[name]) {
                    return localStorage.getItem(name);
                } else {
                    return "";
                }
            }
        }
    },
    //操作sessionStorage，有val是存储，没有是获取，为空是删除
    SessGS: function(name, val) {
        if (val) {
            // if (val instanceof Object) {
            //   val = JSON.stringify(val)
            // };
            sessionStorage.setItem(name, val);
        } else {
            if (val === "") {
                sessionStorage.removeItem(name);
            } else {
                if (sessionStorage[name]) {
                    return sessionStorage.getItem(name);
                } else {
                    return "";
                }
            }
        }
    },
    /*
数据保存
obj:数据对象{a:av,b:bv,c:cv}
ns:存储时的名前缀'ts_'
*/
    saveData: function(obj, ns) {
        var t = ns || "";
        for (var x in obj) {
            var y = t + x;
            BaseJS.SessGS(y, obj[x]);
        }
    },
    /* 数据提取
arr:数据名数组 ['a','b','c']
ns:数据名前缀 'ts_'
返回
obj:数据对象{a:av,b:bv,c:cv}
*/
    getData: function(arr, ns) {
        var t = ns || "";
        var obj = {};
        for (var x in arr) {
            var y = t + arr[x];
            var v = BaseJS.SessGS(y);
            obj[arr[x]] = v == " " ? "" : v;
        }
        return obj;
    },
    /**
     * [shellSort 对象数组去重排序]
     * @param  {[type]} arr [对象数组]
     * @param  {[type]} t [排序值]
     * @param  {[type]} x [去重值]
     * @return {[type]}   v  [结果对象]
     * @return {[type]}   v.a  [排序后对象数组]
     * @return {[type]}   v.r  [去重排序后对象数组]
     */
    shellSort: function(arr, t, x) {
        //排序
        var h = 1;
        while (h <= arr.length / 3) {
            h = h * 3 + 1;
        }
        for (; h >= 1; h = Math.floor(h / 3)) {
            for (var k = 0; k < h; k++) {
                for (var i = h + k; i < arr.length; i += h) {
                    for (var j = i; j >= h && Number(arr[j][t]) > Number(arr[j - h][t]); j -= h) {
                        var tmp = arr[j];
                        arr[j] = arr[j - h];
                        arr[j - h] = tmp;
                    }
                }
            }
        }
        //去重
        var res = [],
            hash = {};
        for (var i = 0; i < arr.length; i++) {
            var elem = arr[i][x] ? arr[i][x] : null;
            if (elem != null && !hash[elem]) {
                res.push(arr[i]);
                hash[elem] = true;
            }
        }
        return {
            a: arr,
            r: res
        };
    },
    /**
* 生成随机字符串
{%example
<script>
alert(randomString(32));
</script>
%}
* @param {Num} len
* @returns {str} 随机字符串
*/
    randomString: function(len) {
        len = len || 32;
        var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = "";
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    /**
* 生成随机数
{%example
<script>
alert(randomNumber(32,100));
</script>
%}
* @param {num} a 从a-b的随机整数
* @param {num} b
* @returns {num} 随机数
*/
    randomNumber: function(a, b) {
        a = isNaN(Number(a)) ? 0 : Number(a);
        b = isNaN(Number(b)) ? 0 : Number(b);
        var t = 0;
        if (a > b) {
            t = b;
            b = a;
            a = t;
            t = b - a
        } else {
            t = b - a
        }
        return (Math.floor(Math.random() * t + a));
    },
    /**
     * 判断是否是function
     * @param  {[type]}  f [description]
     * @return {Boolean}   [description]
     */
    isFunc: function(f) {
        if (typeof(f) === "function" && (f instanceof Function)) {
            return true;
        } else  return false;
    },
    /**
     * 加载jquery，成功执行cb
     * @param  {Function} cb [description]
     * @return {[type]}      [description]
     */
    loadJQ: function(cb) {
        // if (typeof(jQuery) === "undefined") {
        //     var jqscriptEle = document.createElement("script");
        //     jqscriptEle.src = "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";
        //     document.head.insertBefore(jqscriptEle, document.head.childNodes[0]);
        //     jqscriptEle.onload = function() {
        //         if (tkBASE.isFunc(cb)) {
        //             cb();
        //         } else {
        //             return;
        //         }
        //     }
        // } else {
            if (BaseJS.isFunc(cb)) {
                cb();
            } else {
                return;
            }
        // }
    },
    /**
     * //加载图片，返回img对象，成功执行cb
     * @param  {[type]}   url [description]
     * @param  {Function} cb  [description]
     * @return {[type]}       [description]
     */
    loadimg: function(url, cb) {
        var img = new Image;
        img.crossOrigin = "Anonymous";
        img.src = url;
        img.onload = function() {
            if (BaseJS.isFunc(cb)) {
                console.log('test1');
                cb(img);
            };
        }

        // if (img.complete || img.complete === undefined) {
        //     img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        //     img.src = url;
        //     if (tkBASE.isFunc(cb)) {
        //         console.log('test2');
        //         cb(img);
        //     };
        // }
        return img;
    },
    contxtPath:function(){
    	//var /
    }

}

/**
 * 获得今天是星期几
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
var getWeek = function(date,fill){
    var d = date||new Date();
    // var weekday=new Array(7);
    // weekday[0]="Sunday";
    // weekday[1]="Monday";
    // weekday[2]="Tuesday";
    // weekday[3]="Wednesday";
    // weekday[4]="Thursday";
    // weekday[5]="Friday";
    // weekday[6]="Saturday";
    // var x = document.getElementById("demo");
    // x.innerHTML=weekday[d.getDay()];
    return d.getDay()
}

/**
 * 返回当前月的日历数据 '2017/7/31'
 */
var getDayList=function(datestr,fill){
	/**
	 * 获得当前日期的-月最后一天，--下月的最后一天,前月的最后一天
	 * @param {Object} year
	 * @param {Object} month
	 */
	function getLastDaysInMonth(year,month){
		  var dayarr=[]; 
	      //var month = parseInt(month,10)+1;
	      var ldays0 = (new Date(year,month,0)).getDate();//("1998/12/0");//"xxxx/xx/0"
	      month=='12'?month=1:month+=1
	      m2=month
	      var ldays1=(new Date(year,month,0)).getDate();
	      month=='12'?month=1:month+=1
	      m3=month
	      var ldays2=(new Date(year,month,0)).getDate();
	      dayarr=[ldays0,ldays1,ldays2];
	      console.log(dayarr);
	      return dayarr;
	}
	var date,m2,m3;
	datestr?date=new Date(datestr):date=new Date();
//	var date=new Date('2017/7/31');
//	var date=new Date();
	 var year=date.getFullYear(); 
	 var m1=date.getMonth();
	var c_day=date.getDate();
	var days=getLastDaysInMonth(year,m1);
	var wday=date.getDay();//星期
	
	var  clist={};
	var crr_m=[];
	var i=days[1]-c_day+1;//填充下月
	var m2days=days[2]+days[1]-c_day+1;
	for(;c_day<days[1]+1;c_day++){//填充当月
		crr_m.push(c_day);
	}
	clist[m2]=crr_m	
	
	var n1=1;
	var all_days=41-wday
	var next_m=[];
	if(all_days>m2days)//跨三月
	{
		for(;i<days[2]+1;i++){//填充下月数据 
			next_m.push(n1);n1++
		}
		var m=1;
		for(;i<all_days+1;i++){//填充下月的下月数据
			next_m.push(m);
			m++
		}
	}else{
		for(;i<all_days+1;i++){//填充剩余数据
			next_m.push(n1);
			n1++
		}
	}
	clist[m3]=next_m;
	clist['0']=[];
	if(fill){
		var n=date.getDay()
		for(var i=n;i>0;i--){
			clist['0'].push("");
		}
	}
	console.log(clist);
	return clist;
}

function getUrl (linkUrl) {
  var str, arr, newArr, num, num2, i, j, newJson
  if (linkUrl) {
    //str = decodeURIComponent(window.location.search.split('?')[1])
    str = decodeURIComponent (linkUrl.split('?')[1])
    arr = str.split('&')
    num = arr.length
    newJson = {}
    for (i = 0; i < num; i++) {
      newArr = arr[i].split('=')
      num2 = newArr.length
      newJson[newArr[0]] = newArr[1]
    }
    return newJson
  } else {
    return {}
  }
}

//加载自定义 ---JS
function requeryUsJS(src,cb) {
    var scriptEle = document.createElement("script");
    scriptEle.src = src ;
    document.head.appendChild(scriptEle);
    scriptEle.onload = function() {
        cb();
    }
}
/**
 * 在微信上隐藏地址 方法1隐藏
 */
function hideaddress (){
  //console.log("====");
  if (typeof WeixinJSBridge == "undefined"){
//  console.log("==undefined==");
    if( document.addEventListener ){
         document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    }else if (document.attachEvent){
         document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
         document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
  }else{
//  console.log("==else==");
    onBridgeReady();
  }
}
var onBridgeReady = function (){
   WeixinJSBridge.call('hideOptionMenu');
}
hideaddress();
export {BaseJS,getUrl,getWeek,requeryUsJS,getDayList,hideaddress}


