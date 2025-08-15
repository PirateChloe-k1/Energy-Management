<template>
    <el-sub-menu v-if="item.children" :index="item.url">
        <template #title>
            <el-icon>
                <location/>
            </el-icon>
            <span>{{ item.name }}</span>
        </template>
        <my-menu v-for="child in item.children" :key="child.url" :item="child"></my-menu>
    </el-sub-menu>
    <el-menu-item v-else :index="item.url">
        <el-icon><location/></el-icon>
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
            type:Object as PropType<MenuItemType>,
            required:true    
        }
    }
})
</script>

<style scoped lang="less">

</style>