import Vue from 'vue'
import App from './App.vue'

//vue router
import VueRouter from "vue-router";

// inport de Boostrap-vue
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue';

//Pour connection d'API 
import Axios from 'axios';

//import des composant pour router
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";
import Markets from "@/components/Markets.vue";
import Charts from "@/components/Charts";

//Déclaration des routes 
const routes = [
  { path: '*', name: 'home', component: Home },//' * ' est pour que tout les autres routes menent a la page d'accueil 
  { path: '/news', name: 'news', component: News },
  { path: '/markets', name: 'markets', component: Markets },
  { path: '/charts', name: 'charts', component: Charts }
]

const router = new VueRouter({
  mode: 'history', // Pour enlever le # dans la barre de nav
  routes // !IMPORTANT de le mettre après les avoir déclarées
})

Vue.config.productionTip = false

Vue.use(Axios);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
