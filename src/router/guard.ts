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
        // 没有权限
        if(to.meta?.needAuth && !userStore.roles.some((role:string) => (to.meta.needAuth as string[]).includes(role))){
            return {path:"/"}
        }

    }
})