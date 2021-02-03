import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Markets from '../views/Markets.vue'
import Roadmap from '../views/Roadmap.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
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
import Content from'../components/Content'


var isAuthenticated = false;
if (localStorage.getItem('token')) isAuthenticated = true;
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/preventing-money-laundering',
    name: 'Content',
    component: Content
  },
  {
    path: '/markets',
    name: 'Markets',
    component: Markets,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/Roadmap',
    name: 'Roadmap',
    component: Roadmap,
    meta: {
      header: true,
      footer: true
    }
  },
  
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/Careers',
    name: 'Careers',
    component: Careers,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/Customers',
    name: 'Customers',
    component: Customers,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/blog-list',
    name: 'BlogList',
    component: BlogList,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/BlogArticle',
    name: 'BlogArticle',
    component: BlogArticle,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/About',
    name: 'About',
    component: About,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound,
    meta: {
      header: false,
      footer: false
    }
  },
  {
    path: '/help-center',
    name: 'HelpCenter',
    component: HelpCenter,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/Home2',
    name: 'Home2',
    component: Home2,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/Home3',
    name: 'Home3',
    component: Home3,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/Home4',
    name: 'Home4',
    component: Home4,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/legal-docs',
    name: 'LegalDocs',
    component: LegalDocs,
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin,
    // beforeEnter: (to, from, next) => {
    //   if (to.name == 'Signin' && isAuthenticated) { 
    //     next({ name: 'Home' })
    //   }
    //   next()
    // },
    meta: {
      header: false,
      footer: false
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    // beforeEnter: (to, from, next) => {
    //   if (to.name == 'Signup' && isAuthenticated) { 
    //     next({ name: 'Home' })
    //   }
    //   next()
    // },
    meta: {
      header: false,
      footer: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   if ( to.name != 'Signin' && !isAuthenticated) next({ name: 'Signin' })
//   next()
// })
export default router
