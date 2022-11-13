
import {
    createRouter,
    createWebHashHistory,
  } from 'vue-router'
  import helloWorld from '/src/pages/helloWorld.vue'
  import newPage from '/src/pages/newPage.vue'
  
  const routes = [
    {
      path: '/',
      name: 'newPage',
      component: newPage
    },
    {
      path: '/about',
      name: 'helloWorld',
      component: helloWorld
    },
    {
        path: '/newPage',
        name: 'newPage',
        component: newPage
      }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  