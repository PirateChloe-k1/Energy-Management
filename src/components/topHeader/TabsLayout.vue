<!-- 快捷页签导航 -->
<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" type="card" closable @tab-remove="remove">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.name" :name="item.name">
            <template #label>
                <span class="custom-tabs-label">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <!-- &nbsp;空格 -->
                    <span>&nbsp;{{ item.name }}</span>
                </span>
            </template>
        </el-tab-pane>
    </el-tabs>
    <RouterView/>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useTabsStore } from "@/store/tsbs";
import { storeToRefs } from "pinia";

const tabsStore = useTabsStore()
const { tabs } = storeToRefs(tabsStore)
const activeName = ref('third')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

const remove = (TabPaneName: string) => {
    console.log(TabPaneName)
}
</script>
<style lang="less" scoped>
.demo-tabs {
    // 单个样式如果希望突破作用域，就用::v-deep穿透
    ::v-deep .is-active {
        background-color: rgb(34, 136, 255) !important;
        color: #fff !important;
    }
}
</style>