import { post } from "@/utils/http";

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