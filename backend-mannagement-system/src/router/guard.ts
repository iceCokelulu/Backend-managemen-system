import { store } from '@/tools';
import { RouteLocationNormalized, Router } from 'vue-router';
import user from '../store/userStore';
import { CacheEnum } from '@/enum/cacheEnum';
class Guard {
  constructor(private router: Router) {}

  public async run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }

  private async beforeEach(to: RouteLocationNormalized) {
    if (this.isLogin(to) === false) {
      return { name: 'Login' };
    }
    if (this.isGuest(to) === false) {
      alert('无需重复登录');
      return { name: 'Home' };
    }
    await this.getUserInfo();

    
  }
  private getUserInfo() {
    if (this.token()) return user().getUserInfo();
  }

  private token(): string | null {
    return store.get(CacheEnum.TOKEN_NAME);
  }
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.token()));
  }
  private isLogin(route: RouteLocationNormalized) {
    const state = Boolean(
      !route.meta.auth || (route.meta.auth && this.token())
    );
    if (state === false) {
      store.set(CacheEnum.DEDIRECT_ROUTE_NAME, route.name);
    }
    return state;
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
