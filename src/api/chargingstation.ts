import { post, get } from "@/utils/http";

interface ListType {
    page: number,
    pageSize: number,
    name?: string,
    id?: string,
    status: number
}

const Api = {
    List: "/stationList",
} as const

function listApi(data: ListType) {
    return post(Api.List, data)
}

export { listApi }