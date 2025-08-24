import { post } from "@/utils/http"
enum Api {
    auth = "/userAuth",
    setAuth = "/setAuth"
}

function getAuthApi(pageAuthority: string) {
    return post(Api.auth, { pageAuthority })
}

export { getAuthApi }