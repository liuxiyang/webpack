import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import '../assets/css/base.css'
import filter from '../common/filter.js'
import routes from '../route/router.js'
import Fastclick from 'fastclick'

document.addEventListener('DOMContentLoaded', function() {
  // if (window.FastClick) window.FastClick.attach(document.body);
  Fastclick.attach(document.body);
}, false);

Vue.use(VueResource);
Vue.use(VueRouter);

Object.keys(filter).forEach(function(k) {
	Vue.filter(k, filter[k]);
});

const router = new VueRouter({
	routes : routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('app')
