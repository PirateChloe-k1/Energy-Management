<template>
    <el-sub-menu v-if="item.children" :index="item.url">
        <template #title>
            <el-icon>
                <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
        </template>
        <my-menu v-for="child in item.children" :key="child.url" :item="child"></my-menu>
    </el-sub-menu>
    <el-menu-item v-else :index="item.url">
        <el-icon>
            <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
    </el-menu-item>
</template>

<script lang="ts"> 
import {defineComponent,type PropType} from "vue"
import {type MenuItem as MenuItemType} from "@/types/user/index.ts"
export default defineComponent({
    name:"MyMenu",
    props:{
        item:{
            // 使用 TypeScript 的 PropType 来指定 item 的具体类型为 MenuItemType
            type:Object as PropType<MenuItemType>,
            required:true    
        }
    }
})
</script>

<style scoped lang="less">
.is-active{
    background-color: rgb(34, 136, 255);
    color: #fff !important;
    div{
        span{
            color: #fff;
        }
    }
}
.el-menu-item:hover{
    background-color:rgb(34, 136, 255) !important;
    // 文字颜色
    color: #fff !important ;
}
::v-deep .el-sub-menu__title:hover{
    // 文字颜色
    background-color:rgb(34, 136, 255) !important;
    color: #fff !important ;
}
</style>