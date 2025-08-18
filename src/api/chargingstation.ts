import { get, post } from "@/utils/http";
import type { RowType } from "@/types/station";

interface ListType {
    page: number,
    pageSize: number,
    name?: string,
    id?: string,
    status: number
}

interface RevenueType {
    page: number,
    pageSize: number,
    name: string
}

const Api = {
    List: "/stationList",
    // 后端会判断是否有id,没有就是新增,有就是编辑
    Edit: "/station/edit",
    Delete: "/station/delete",
    RevenueChart: "/revenueChart",
    Revenue: "/revenueList"
} as const

function listApi(data: ListType) {
    return post(Api.List, data)
}

function editApi(data: RowType) {
    return post(Api.Edit, data)
}

function deleteApi(id: string) {
    return post(Api.Delete, { id })
}

function chartApi() {
    return get(Api.RevenueChart)
}
function revenueApi(data: RevenueType) {
    return post(Api.Revenue, data)
}

export { listApi, editApi, deleteApi, chartApi, revenueApi }