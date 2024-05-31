import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../pages/HomeView.vue'
import LoginView from '../pages/LoginView.vue'
import RegisterView from '../pages/RegisterView.vue'
import CourseView from '../pages/CourseView.vue'
import casaPage from "../components/casaPage.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/courses',
    name: 'courses',
    component: CourseView
  },
  {
    path: '/casa',
    component: casaPage,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
