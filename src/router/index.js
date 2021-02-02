import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Markets from '../views/Markets.vue'
import Roadmap from '../views/Roadmap.vue'
import Signin from '../views/Signin.vue'
import Contact from '../views/Contact.vue'
import Customers from '../views/Customers.vue'
import Careers from '../views/Careers.vue'
import Education from '../views/Education.vue'
import BlogList from '../views/Blog-list.vue'
import BlogArticle from '../views/Blog-article.vue'
import About from '../views/About.vue'
import NotFound from '../views/404.vue'
import HelpCenter from '../views/Help-center.vue'
import LegalDocs from '../views/Legal-docs.vue'
import Home2 from '../views/Home-2.vue'
import Home3 from '../views/Home-3.vue'
import Home4 from '../views/Home-4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/markets',
    name: 'Markets',
    component: Markets
  },
  {
    path: '/Roadmap',
    name: 'Roadmap',
    component: Roadmap
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/Customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education
  },
  {
    path: '/blog-list',
    name: 'BlogList',
    component: BlogList
  },
  {
    path: '/BlogArticle',
    name: 'BlogArticle',
    component: BlogArticle
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/help-center',
    name: 'HelpCenter',
    component: HelpCenter
  },
  {
    path: '/Home2',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/Home3',
    name: 'Home3',
    component: Home3
  },
  {
    path: '/Home4',
    name: 'Home4',
    component: Home4
  },
  {
    path: '/legal-docs',
    name: 'LegalDocs',
    component: LegalDocs
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
