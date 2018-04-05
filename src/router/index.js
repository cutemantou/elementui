import Vue from 'vue'
import Router from 'vue-router'
import Basic from '@/components/Basic'
import Form from '@/components/Form'
import Data from '@/components/Data'
import Notice from '@/components/Notice'
import Others from '@/components/Others'
import Navigation from '@/components/Navigation'

Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },{
      path: '/form',
      name: 'Form',
      component: Form
    },{
      path: '/data',
      name: 'Data',
      component: Data
   },{
      path: '/notice',
      name: 'Notice',
      component: Notice
   },{
      path: '/others',
      name: 'Others',
      component: Others
   },{
      path: '/navigation',
      name: 'Navigation',
      component: Navigation
    }
  ]
})
