import { createRouter,createWebHistory,type RouteRecordRaw } from "vue-router";

const routes:RouteRecordRaw[] = [
    {
        path:"/",
        name:"Home",
        component:()=>import("@/views/Home.vue")
    },
    {
        path:"/about",
        name:"About",
        component:()=>import("@/views/About.vue")
    }
]

const router = createRouter({
    // 路由的模式
    history:createWebHistory(),
    // 路由的配置项数组
    routes
})

export default router