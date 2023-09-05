interface IData {
  data: any;
  expired?: number;
}
export default {
  set(key: string, data: any, expired?: number) {
    let cache: IData = { data };
    if (expired) {
      cache.expired = new Date().getTime() + data.expried * 1000;
    }
    localStorage.setItem(key, JSON.stringify(cache));
  },
  get(key: string): any {
    const cacheStore = localStorage.getItem(key);
    if (cacheStore) {
      const cache = JSON.parse(cacheStore);
      const expired = cache?.expired;
      if (expired < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return cache.data;
    }
    return null;
  },
  remove(key:string){
    localStorage.removeItem(key)
  }
};
