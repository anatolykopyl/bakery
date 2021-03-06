import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/goods',
        name: 'Goods',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
    },
    {
        path: '/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
    },
    {
        path: '/contact-us',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
