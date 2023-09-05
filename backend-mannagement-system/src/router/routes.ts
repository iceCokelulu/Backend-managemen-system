import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Auth/Login.vue'),
    meta: { guest: true },
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/Error/404.vue'),
  },
] as RouteRecordRaw[];

export default routes;
