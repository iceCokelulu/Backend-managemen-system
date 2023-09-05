import { IMenu } from '#/menu';
import { defineStore } from 'pinia';
import { router } from '@/router';
import { RouteLocationNormalized } from 'vue-router';
import { store } from '@/tools';
import { CacheEnum } from '@/enum/cacheEnum';

//pinia需在组件中调用生效
const menuStore = defineStore('menu', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
    };
  },
  actions: {
    init() {
      this.getMenuByRoute();
      this.historyMenu = store.get(CacheEnum.HISTORY_MENU) ?? [];
    },
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenu.indexOf(menu);
      this.historyMenu.splice(index, 1);
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return;
      const menu: IMenu = { ...route.meta?.menu, route: route.name as string };
      //判断是否重复
      const isHas = this.historyMenu.some((menu) => menu.route == route.name);
      if (!isHas) this.historyMenu.unshift(menu);
      //对历史菜单长度限制10
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop();
      }
      store.set(CacheEnum.HISTORY_MENU, this.historyMenu);
    },
    //根据路由获取菜单
    getMenuByRoute() {
      this.menus = router
        .getRoutes()
        .filter((route) => route.children.length && route.meta.menu)
        .map((route) => {
          let menu: IMenu = { ...route.meta?.menu };
          menu.children = route.children
            .filter((route) => route.meta?.menu)
            .map((route) => {
              return { ...route.meta?.menu, route: route.name };
            }) as IMenu[];
          return menu;
        })
        .filter((menu) => menu.children?.length);
    },
  },
});
export { menuStore };
