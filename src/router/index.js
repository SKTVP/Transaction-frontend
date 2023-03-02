import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addAccount from '../views/Account/addAccount.vue'
import sinalagiView from '../views/sinalagiView/sinalagiView.vue'

import synalagesView from '../views/Allsynalages/synalagesView.vue'
import  errorView from '../views/errorView.vue'
import allAccounts from '../views/AllAccounts/allAccounts.vue'


const routes = [
  {
    path: '/',
    name: 'navBar',
    component: HomeView
  },
  {
    path:"/addAccount",
    name:'addAccount',
    component:addAccount
  },
  {
    path:"/addSinalagi",
    name:'addsinalagi',
    component: sinalagiView
  },
  {
    path: '/error',
    name: 'error',
    component: errorView 
  },
  {
    path:'/accounts',
    name:'accounts',
    component:allAccounts
  },
  {
    path:'/synalagesView',
    name:'SynallagesVieW',
    component:synalagesView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
