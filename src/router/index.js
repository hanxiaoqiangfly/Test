import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/mainpage/Home"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/mine',
        name: 'Mine',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/mainpage/Mine.vue')
    },
    {
        path: "/myInviteCode",
        name: "MyInviteCode",
        component: () => import('../views/subpage/MyInviteCode')
    },
    {
        path: "/myRecommendFriend",
        name: "MyRecommendFriend",
        component: () => import('../views/subpage/MyRecommendFriend')
    },
    {
        path: "/myFriend",
        name: "MyFriend",
        component: () => import('../views/subpage/MyFriend.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
