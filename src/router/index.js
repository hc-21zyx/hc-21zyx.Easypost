import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import UserListView from '../views/UserListView'
import UserProfileView from '../views/UserProfileView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import NotFoundView from '../views/NotFoundView'

const routes = [
  {
    path: '/myspace/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myspace/userlist/',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/myspace/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfileView 
  },
  {
    path: '/myspace/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/myspace/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/myspace/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path:'/myspace/:catch(.*)',
    redirect:'/myspace/404/',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
