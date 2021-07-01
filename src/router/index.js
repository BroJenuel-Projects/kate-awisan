import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/aboutme'
    },
    {
        path: '/aboutme',
        name: 'AboutMe',
        component: () => import('./../components/AboutMe')
    },
    {
        path: '/works',
        name: 'Works',
        component: () => import('./../components/Portfolio')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('./../components/Conntact')
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
      }
})

export default router
