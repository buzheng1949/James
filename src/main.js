// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Router from 'vue-router'
import Category from './components/Category'
import About from './components/About'
// import router from './router'
import $ from 'jquery'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(Router)

Vue.config.productionTip = false

const routes = [
    { path: '/', component:  Home },
    { path: '/categories', component: Category },
    { path: '/about', component: About }
]

const router = new Router({
  routes
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
