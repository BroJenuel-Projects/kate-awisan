import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from './../components/AboutMe'
import Experience from './../components/Experience'
import Portfolio from './../components/Portfolio'
import Contact from './../components/Conntact'


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
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = new VueRouter({
    routes
})

export default router
