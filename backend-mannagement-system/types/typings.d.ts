import 'vue-router'
import { IMenu } from './menu'

declare module 'vue-router' {
  interface RouteMeta {
    auth?:boolean
    guest?:boolean
    //是否菜单显示
    permissions?:string[]
    menu?:IMenu
  }
}