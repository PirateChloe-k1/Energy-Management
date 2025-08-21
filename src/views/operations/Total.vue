<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <el-card>
                <el-input style="width: 80%;" placeholder="请输入关键词" v-model="filterText">
                    <template #append>
                        <el-button icon="Search" />
                    </template>
                </el-input>
                <el-tree ref="treeRef" :data="treeData" style="max-width: 600px;" :props="defaultProps" class="mt"
                    :filter-node-method="filterNode"></el-tree>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { cityListApi } from '@/api/operation';
import { ElTree } from 'element-plus';
interface Tree {
    label: string,
    chileren?: Tree[]
}

// InstanceType用来获取构造函数类型的实例类型
const treeRef = ref<InstanceType<typeof ElTree>>()
const filterText = ref<string>("")

watch(filterText, (val) => {
    // !是非空断言
    treeRef.value!.filter(val)
})

const defaultProps = {
    chileren: 'children',
    label: 'label'
}

const treeData = ref<Tree[]>([])
onMounted(async () => {
    const { data } = await cityListApi()
    treeData.value = data
})

const filterNode: any = (value: string, data: Tree) => {
    console.log(value, data)
    if (!value) return true
    return data.label.includes(value)
}
</script>