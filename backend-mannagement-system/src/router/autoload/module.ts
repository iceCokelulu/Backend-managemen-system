import { RouteRecordRaw } from 'vue-router';

export default function autoLoadModule() {
  const module:Record<string, any> = import.meta.glob('./module/**/*.ts', {
    eager: true,
    import: 'default',
  });
  const routes: RouteRecordRaw[] = [];
  Object.keys(module).forEach((key) => {
    routes.push(module[key]);
  });
  return routes;
}
