import { defineStore } from 'pinia';
import { getInfo, IUser } from '../apis/userApi';
export default defineStore('user', {
  state: () => {
    return {
      info: {} as null | IUser,
    };
  },
  actions: {
    async  getUserInfo() {
    const res = await getInfo()
    this.info = res.result
    },
  },
});
