import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  name: 'Editor',
  path: '/Editor',
  component: () => import('@/layouts/Admin.vue'),
  meta: {
    menu: { title: '编辑页面', icon: 'fas fa-pen-ruler' },
    auth: true,
  },
  children: [
    {
      name: 'MarkDown',
      path: 'MarkDown',
      component: () => import('@/views/Editor/MarkDown.vue'),
      meta: { menu: { title: 'MarkDown' } },
    },
    {
      name: 'Base',
      path: 'Base',
      component: () => import('@/views/Editor/Base.vue'),
      meta: { menu: { title: 'Base' } },
    },
  ],
};

export default route;
