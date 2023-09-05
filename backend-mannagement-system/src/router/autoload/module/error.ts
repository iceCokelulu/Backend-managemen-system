import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  name: 'Error',
  path: '/Error',
  component: () => import('@/layouts/Admin.vue'),
  meta: {
    menu: { title: '错误页面',icon: 'fas fa-rectangle-xmark',isClick:false },
    auth:true
  },
  children: [
    {
      name: '404',
      path: '404',
      component: () => import('@/views/Error/404.vue'),
      meta: {menu:{ title: '404页面' }},
    },
    {
      name: '403',
      path: '403',
      component: () => import('@/views/Error/403.vue'),
      meta: {menu:{ title: '403页面' }},
    },
  ],
};

export default route;
