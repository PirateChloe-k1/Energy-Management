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
    Edit: "/station/edit",
    Delete: "/station/delete"
} as const

function listApi(data: ListType) {
    return post(Api.List, data)
}

function editApi(data: RowType) {
    return post(Api.Edit, data)
}

function deleteApi(id: string) {
    return post(Api.Delete, {id})
}

export { listApi, editApi, deleteApi }