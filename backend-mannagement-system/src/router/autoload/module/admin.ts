import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  name: 'Admin',
  path: '/Admin',
  redirect:'/Admin/HomePage',
  component: () => import('@/layouts/Admin.vue'),
  meta:{auth:true},
  children: [
    {
      name: 'HomePage',
      path: 'HomePage',
      component: () => import('@/views/Admin/HomePage.vue'),
    },
  ],
};

export default route
