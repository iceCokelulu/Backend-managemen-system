
import { RouteRecordRaw } from 'vue-router';

const layoutComponents = import.meta.glob('@/layouts/*.vue', {
  eager: true,
  import: 'default',
});

const viewComponents = import.meta.glob('@/views/**/*.vue', {
  eager: true,
  import: 'default',
});

//组合路由，导出
export default function getRoutes() {
  const layoutRoutes: RouteRecordRaw[] = [];
  Object.entries(layoutComponents).forEach(([path, module]) => {
    const route = getRouteByModule(path, module);
    route.children = getRouteChildren(route);
    layoutRoutes.push(route);
  });
  return layoutRoutes;
}

//获取路由
function getRouteByModule(path: string, module: any):RouteRecordRaw {
  const name = path.split('/').pop()?.split('.').shift();
  const route = {
    path: `/${name}`,
    name,
    component: module,
  };
  //自定义路由规则
  return Object.assign(route,route.component?.route);
}

//获取子路由
function getRouteChildren(layoutRoute: RouteRecordRaw) {
  const viewRoute: RouteRecordRaw[] = [];
  Object.entries(viewComponents).forEach(([path, module]) => {
    if (path.includes(`/src/views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(path, module);
      const routePath: string = getRouteByModule(path, module)
        .path.split('/')
        .pop()!;
      route.path = routePath;
      viewRoute.push(route);
    }
  });
  return viewRoute;
  
  
}

