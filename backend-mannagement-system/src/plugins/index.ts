import { App } from 'vue';
import setUpTailWindCss from './tailWindCss';
import setUpElement from './element-plus'
import setUpPinia from './pinia'
function setupPlugins(app: App) {
  registerGlobalComponents(app);
  setUpTailWindCss();
  setUpElement(app)
  setUpPinia(app)
}

//自动注册全局组件
function registerGlobalComponents(app: App) {
  const components:Record<string,any>= import.meta.glob('@/components/**/*.vue', {
    eager: true,
    import: 'default',
  });
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift() as string;
    
    app.component(name, components[key]);
  });
}

export default setupPlugins;
