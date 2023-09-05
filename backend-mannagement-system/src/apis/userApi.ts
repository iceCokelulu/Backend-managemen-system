import { axios } from '@/plugins/axios';

export interface IUser {
  name: string;
  age: number;
}

function getInfo() {
  return axios.request<IUser>({
    url: `user/info`,
  });
}

interface LoginInterface {
  token: string;
}

export interface ILoginData{
  account: string,
  passWord: string
}

function login(data: any) {
  return axios.request<LoginInterface>({
    url: `login`,
    method: 'post',
    data,
  });
}

export  { getInfo, login };
