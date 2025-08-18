import { post } from "@/utils/http";
import type { RowType } from "@/types/station";

interface ListType {
    page: number,
    pageSize: number,
    name?: string,
    id?: string,
    status: number
}

const Api = {
    List: "/stationList",
    // 后端会判断是否有id,没有就是新增,有就是编辑
    Edit: "/station/edit"
} as const

function listApi(data: ListType) {
    return post(Api.List, data)
}

function editApi(data: RowType) {
    return post(Api.Edit, data)
}

export { listApi, editApi }