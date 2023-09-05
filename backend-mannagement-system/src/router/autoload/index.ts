import { env } from "@/tools";
import { RouteRecordRaw } from "vue-router";
import getRoutes from "./views.ts";
import autoLoadModule from "./module.ts";
let routes = [] as RouteRecordRaw[]

if(env.VITE_ROUTER_KEY){
    routes = getRoutes()
}else{
    routes = autoLoadModule()
}

export default routes