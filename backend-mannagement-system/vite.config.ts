import { defineConfig, ConfigEnv, loadEnv } from 'vite';
import alias from './vite/alias';
import {parseEnv} from './vite/parseViteEnv'
import setUpVitePlugins from './vite/vitePlugins';
/* export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias,
  }
}) */

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build';
  //获取当前根路径
  const root = process.cwd();
  //获取当前环境变量,parseEnv解析环境变量值
  const env = parseEnv(loadEnv(mode, root));
  
  return {
    plugins: setUpVitePlugins(isBuild,env),
    resolve: {
      alias,
    },
  };
};
