import {createRouter, createWebHashHistory, createMemoryHistory} from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';

const routes = [
    { path: '/', component: Home },
    { 
      path: '/about',
      component: About,
      meta: { 
        requiresAuth: true,
        showHeader: false
      },
      beforeEnter: (to, from) => {
      // reject the navigation
      return true
      }
    },
    { 
      path: '/about-with-header',
      component: About,
      meta: { 
        requiresAuth: true,
        showHeader: false
      },
      beforeEnter: (to, from) => {
      // reject the navigation
      return true
    }
  },
    { path: '/user/:id', component: About },
    // {
    //   path: "*",
    //   component: Home 
    // },
  ]

  //GLOBAl

  // router.beforeEach((to, from) => {
  //   console.log('check user')
  //   return true
  // })
  // router.afterEach((to, from) => {
  //   //sendToAnalytics
  // })
  
  const router = createRouter({
    history: createWebHashHistory(), //createMemoryHistory()
    routes, // short for `routes: routes`
  })

  export default router;