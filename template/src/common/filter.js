export default {
	formatDate(time) {
		var __date__ = new Date(time);
		return __date__.getFullYear() + '年' + (__date__.getMonth() + 1) + '月' + __date__.getDate() + '日';
	},
	ellipsisGraph(graph, limitNum) {
		if(graph.length > limitNum){
			return graph.replace(/<.*?>/ig,"").replace(/\s/g,'').slice(0, limitNum) + '...';
		}else{
			return graph.replace(/<.*?>/ig,"").replace(/\s/g,'');
		}
	},
	//手机号加星
	mobileAddStar(num) {
		return num ? num.substr(0,3) + '****' + num.substr(7,4) : '';
	}
}