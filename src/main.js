import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import Navigation from "@/components/Navigation.vue"
import Home from "@/components/Home.vue"
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue';
import Axios from 'axios';

const routes = [
  { path: '/navigation', name: 'navigation', component: Navigation},
  { path: '/home', name: 'home', component: Home}
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

Vue.use(Axios)
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
