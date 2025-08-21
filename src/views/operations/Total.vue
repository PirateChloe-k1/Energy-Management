<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <el-card>
                <el-input style="width: 80%;" placeholder="请输入关键词" v-model="filterText">
                    <template #append>
                        <el-button icon="Search" />
                    </template>
                </el-input>
                <el-tree ref="treeRef" style="max-width: 600px;" :props="defaultProps"></el-tree>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue';

const filterText = ref < string > ("")

const defaultProps = {
    chileren:'children',
    label:'label'
}
</script>