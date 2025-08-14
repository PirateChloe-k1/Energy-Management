import { defineStore } from 'pinia'
import { loginApi } from '@/api/user'

interface LoginParams {
    username:string,
    password:string
}

export const useUserStore = defineStore('user',{
    state:()=>({
        token:sessionStorage.getItem("token")||"",
        // 权限
        // getItem("roles")!这里的!是非空断言，表示它一定不是空的
        role:sessionStorage.getItem("roles")?JSON.parse(sessionStorage.getItem("roles")!):[],
        username:sessionStorage.getItem("username")||"",
        menu:sessionStorage.getItem("menu")?JSON.parse(sessionStorage.getItem("menu")!):[]
    }),
    actions: {
        async login(data:LoginParams){
            try{
                const {data:{token,user:{username,roles},menulist}} = await loginApi(data)
                this.token = token
                this.username = username
                this.role = roles
                this.menu = menulist
                sessionStorage.setItem("token",token)
                sessionStorage.setItem("username",username)
                sessionStorage.setItem("roles",JSON.stringify(roles))
                sessionStorage.setItem("menu",JSON.stringify(menulist))
            }catch(error){
                console.log("error",error)
            }
        }
    }
})