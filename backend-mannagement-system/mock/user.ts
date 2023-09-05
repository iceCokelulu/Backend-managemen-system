
import { MockMethod} from 'vite-plugin-mock'
import {Random} from 'mockjs'

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message:'获取成功',
        type:'success',
        result: {
          name: 'John',
          age:21
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message:'获取成功',
        type:'success',
        result: {
          token:Random.string(10),
        },
      }
    },
  },
] as MockMethod[]