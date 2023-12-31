import { App } from 'vue';
import { createPinia } from 'pinia';
export default function setUpPinia(app: App) {
  const pinia = createPinia();
  app.use(pinia);
}
