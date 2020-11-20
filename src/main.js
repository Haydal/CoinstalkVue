import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import Navigation from "@/components/Navigation.vue";
import Home from "@/components/Home.vue";
import Charts from "@/components/Charts.vue";
import Header from "@/components/Header.vue";
import Markets from "@/components/Markets.vue";
import News from "@/components/News.vue";


import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue';
import Axios from 'axios';

const router = new VueRouter({
  routes
})

const routes = [
  { path: '/navigation', name: 'navigation', component: Navigation },
  { path: '/home', name: 'home', component: Home },
  { path: '/charts', name: 'charts', component: Charts },
  { path: '/header', name: 'header', component: Header },
  { path: '/markets', name: 'markets', component: Markets },
  { path: '/news', name: 'news', component: News },
  { path: '*', component: '/' }
]



Vue.config.productionTip = false

Vue.use(Axios)
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
