import { ref } from 'vue';
import { IMenu } from '#/menu';
import { router } from '@/router';
import { store } from '@/tools';
import { CacheEnum } from '@/enum/cacheEnum';
import { RouteLocationNormalizedLoaded } from 'vue-router';

class Menu {
  public menus = ref<IMenu[]>([]);
  public historyMenu = ref<IMenu[]>([]);
  public close = ref(false)

  constructor() {
    this.menus.value = this.getMenuByRoute();
    this.historyMenu.value = store.get(CacheEnum.HISTORY_MENU) ?? [];
  }

  toggleState(){
    this.close.value = !this.close.value
  }
  
  setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach((m) => { 
      m.isClick = false
      m.children?.forEach(c =>{
        c.isClick = false
        if(c.route == route.name){
          m.isClick = true
          c.isClick = true
        }
      })
    });
  }

  getMenuByRoute() {
    return router
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
  }
}

export { Menu };
