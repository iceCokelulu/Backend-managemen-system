import { CacheEnum } from '@/enum/cacheEnum';
import store from './store';
import { login, ILoginData } from '@/apis/userApi';
import { router } from '@/router';
import userStore from '@/store/userStore';
async function userLogin(values: ILoginData) {
  const {
    result: { token },
  } = await login(values);
  userStore;
  store.set(CacheEnum.TOKEN_NAME, { token });
  alert('登录成功');
  //页面跳转
  let routeName = store.get(CacheEnum.DEDIRECT_ROUTE_NAME)??'Home'
  router.push({ name: routeName }); 
  store.remove(CacheEnum.DEDIRECT_ROUTE_NAME)
}

function logout() {
  store.remove(CacheEnum.TOKEN_NAME);
  router.push('/');
  userStore().info = null;
}

export { logout, userLogin };
