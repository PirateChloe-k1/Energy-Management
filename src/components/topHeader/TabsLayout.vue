<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" type="card" closable @tab-remove="remove">
        <el-tab-pane label="User" name="first">
            <template #label>
                <span class="custom-tabs-label">
                    <el-icon>
                        <calendar />
                    </el-icon>
                    <span>Route</span>
                </span>
            </template>
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>

</template>
<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref('third')

const handleClick = (tab:TabsPaneContext,event:Event) => {
    console.log(tab,event)
}

const remove = (TabPaneName:string) => {
    console.log(TabPaneName)
}
</script>
<style lang="less" scoped>

</style>