import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from './../components/AboutMe'
import Experience from './../components/Experience'
import Portfolio from './../components/Portfolio'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'AboutMe',
        component: AboutMe
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    }
]

const router = new VueRouter({
    routes
})

export default router
