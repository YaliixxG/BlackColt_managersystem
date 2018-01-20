// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../node_modules/axios';
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/blackcolt-dark/index.css';
import "babel-polyfill";
 Vue.use(Element)

 //如果在其它的组件中，是无法使用 axios 命令的。但如果将 axios 改写为 Vue 的原型属性，就能解决这个问题
 Vue.prototype.$axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  //ES6 写法 渲染APP组件
 render:h=>h(App)
}).$mount('#app')   //挂在#app 相当于 el:'#app'
