import Vue from 'vue';
export default{
	fetch(url, method='get', data = {}, options = {}){
		if(method == 'get'){
			return Vue.http.get(url, data, options);
		}else if(method == 'post'){
			return Vue.http.post(url, data, options);
		}else if(method == 'jsonp'){
			return Vue.http.jsonp(url, data, options);
		}
	},
	fetchSession(key){
		return JSON.parse(sessionStorage.getItem(key));
	},
	saveSession(key,obj){
		if(Object.is(obj,undefined)){
			return;
		}
		sessionStorage.setItem(key, JSON.stringify(obj));
	},
	//获取url中的query参数
	getQuery( key ){
		var parseStr =  function ( str, substr, delim ){
		    var start = str.indexOf( substr + '=' );
		    if( start === -1 ) return '';

		    var end = str.indexOf( delim, start );
		    if( end === -1 ){
		        end = str.length;
		    }

		    var value = str.substring( start + substr.length + 1, end ),
		        reg = /select |update |delete |truncate |join |union |exec |insert |drop |count |script|>|</i; //去除SQL注入和XXS攻击

		    return decodeURIComponent( reg.test( value ) ? '' : value );
		}

	    return parseStr( window.location.search, key, '&');
	}
}