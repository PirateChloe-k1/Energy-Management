import { createRouter,createWebHistory } from "vue-router";
import routes from '@/router/basicRouteMap';

const router = createRouter({
    // 路由的模式
    history:createWebHistory(),
    // 路由的配置项数组
    routes
})

export default router