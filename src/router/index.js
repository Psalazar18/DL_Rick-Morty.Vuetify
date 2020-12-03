import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      cards: true
    }
  },
  {
    path: '/',
    redirect: 'Login',
  },
  {
    path: '*',
    redirect: 'Login',
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import( '../views/CardsView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  var user = firebase.auth().currentUser;
  let authRequired = to.matched.some(ruta => ruta.meta.cards)

  if (!user && !authRequired) {
    next('login');
     alert('Debes loguearte primero!')
  }else if(user && !authRequired){
    next();
  }else {
    next()  
  }
})

export default router
