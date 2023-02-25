import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: '',
          name: 'homepage',
          component: () => import('../views/HomePage.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path:'goods',
          name:'goods',
          component: ()=> import('../views/GoodsPage.vue')
        },
        {
          path:'collect',
          name:'collect',
          component: ()=>import('../views/MyCollectView.vue')
        },
        {
          path:'booking',
          name:'booking',
          component: ()=>import('../views/BookingView.vue')
        },
        {
          path:'goodInfomation/:id',
          name:'goodInfomation',
          component: ()=>import('../views/GoodInfomation.vue')
        },
        {
          path:'cart',
          name:'cart',
          component: ()=>import('../views/CartPage.vue'),
          children:[
            {
              path:'',
              name:'cartOder',
              component: ()=>import('../views/CartOder.vue')
            },
            {
              path:'checkout/:orderId',
              name:'cartCheckout',
              component: ()=>import('../views/CartCheckout.vue')
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior(to, from, savePosition){
    if(savePosition){
      return savePosition
    }else{
      return { 
        top: 0,
        behavior: 'smooth'
      }
    }
  }
});

export default router
