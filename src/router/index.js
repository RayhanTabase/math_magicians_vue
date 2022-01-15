import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue';
import Quote from '../components/Quote.vue';
import Calculator from '../components/Calculator.vue';


const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/quote',
    name: 'Quote',
    component: Quote
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  }
]

const router = createRouter({
  history: createWebHistory(process.env.Base_url),
  routes,
})

export default router