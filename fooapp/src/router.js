import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landingpage',
            index: 1,
            component: () => import('./views/mains/Landingpage.vue')
        },
        {
            path: '/about',
            name: 'About',
            index: 2,
            component: () => import('./views/mains/About.vue')
        }
    ],
    mode: 'history'
})