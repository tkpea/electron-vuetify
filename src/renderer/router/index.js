import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/external-command',
      name: 'external-command',
      component: require('@/components/ExternalCommand').default
    }, 
    {
      path: '/dinosaur',
      name: 'external-command',
      component: require('@/components/Dinosaur').default
    },         
    {
      path: '*',
      redirect: '/'
    }
  ]
})
