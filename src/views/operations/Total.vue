<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <el-card>
                <el-input style="width: 80%;" placeholder="请输入关键词" v-model="filterText">
                    <template #append>
                        <el-button icon="Search" />
                    </template>
                </el-input>
                <el-tree 
                :data="treeData"
                style="max-width: 600px;" 
                :props="defaultProps"
                class="mt"
                ></el-tree>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { cityListApi } from '@/api/operation';
interface Tree{
    label:string,
    chileren?:Tree[]
}

const filterText = ref < string > ("")
const defaultProps = {
    chileren: 'children',
    label: 'label'
}

const treeData = ref<Tree[]>([])
onMounted(async()=>{
    const {data} = await cityListApi()
    treeData.value = data
})
</script>