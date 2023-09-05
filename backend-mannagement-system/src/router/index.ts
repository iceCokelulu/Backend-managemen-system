import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import autoLoadRoutes from './autoload/';
import guard from './guard';
const router = createRouter({
  history: createWebHistory(),
  //模块路由配置表
  routes:[...routes,...autoLoadRoutes]
});
//调用main文件APP,
function setupRouter(app:App){
    guard(router)
    app.use(router) 
}

export {router,setupRouter}

