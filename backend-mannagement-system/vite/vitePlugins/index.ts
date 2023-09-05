import { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import setUpMockJs from './mock'
function setUpVitePlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()];
  plugins.push(setUpMockJs(isBuild))
  return plugins;
}

export default setUpVitePlugins;
