import router from "./index.ts";
import { useUserStore } from "@/store/auth.ts";

router.beforeEach((to)=>{
    const userStore = useUserStore()
    const isLogin = userStore.token
    if(!isLogin){
        // 未登录
        if(to.path !== "/login"){
            return {path:"/login"}
        }
    } else {
        // 已登录，如果访问登录页面，重定向到首页
        if(to.path === "/login"){
            return {path:"/"}
        }
        // 已登录访问其他页面，允许访问
    }
})