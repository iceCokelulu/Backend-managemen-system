import { createApp } from 'vue';
import App from './App.vue';
import { router,setupRouter } from './router';
import setupPlugins from '@/plugins'
import '@/styles/global.scss'

async function bootsTrap() {
  const app = createApp(App);
  //路由处理
  setupRouter(app);
  //插件处理
  setupPlugins(app)
  //路由处理完成之后再挂载

  await router.isReady()
  app.mount('#app');
}
bootsTrap()
