import { post } from "@/utils/http";
// 使用了const断言语法,在编译时完全擦除
const Api = {
    Login: "/login",
} as const;

interface LoginParams {
    username:string,
    password:string
}

function loginApi(data:LoginParams){
    return post(Api.Login,data)
}

export {loginApi}