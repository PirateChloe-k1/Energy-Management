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
        <el-col :span="18">
            <el-card>
                <template #header>
                    <div class="card-header">
                        <h3>{{ title }}:计费模板</h3>
                    </div>
                </template>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto">
                    <el-form-item label="模板名称:">
                        <el-input v-model="ruleForm.name" placeholder="请输入模板名称" style="max-width: 200px;"/>
                    </el-form-item>

                    <el-form-item :label="'时间区间'+(index+1)+':'" v-for="(timeSlot, index) in ruleForm.date" :key="index">
                        <el-col :span="8">
                            <el-form-item>
                                <el-time-picker v-model="timeSlot.date1" placeholder="选择开始时间" style="width:100%" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="1">
                            <span class="ml">--</span>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item>
                                <el-time-picker v-model="timeSlot.date2" placeholder="选择结束时间" style="width:100%" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="电费">
                                <el-input v-model="timeSlot.electricity" placeholder="请输入电费" style="width:100%" />
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-button type="primary" class="mb" @click="addTimeSlot">添加时间区间</el-button>
                    <el-form-item label="服务费：">
                        <el-input v-model="ruleForm.service" style="max-width: 200px;" />
                    </el-form-item>
                    <el-form-item label="停车费：">
                        <el-input v-model="ruleForm.parking" style="max-width: 200px;" />
                    </el-form-item>
                    <el-form-item label="特殊备注：">
                        <el-input v-model="ruleForm.remarks" type="textarea" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">创建</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, reactive } from 'vue';
import { cityListApi } from '@/api/operation';
import { ElTree, type FormInstance, type FormRules } from 'element-plus';
interface Tree {
    label: string,
    chileren?: Tree[]
}

interface RuleFormType{
    name: string
    service: string,
    parking: string,
    remarks: string,
    date: Array<{date1:string,date2:string,electricity:string}>
}

// InstanceType用来获取构造函数类型的实例类型
const treeRef = ref<InstanceType<typeof ElTree>>()
const filterText = ref<string>("")

watch(filterText, (val) => {
    // !是非空断言
    // 当调用这行代码时：
    // Element Plus 内部执行：
    // 1. 遍历所有树节点
    // 2. 对每个节点调用 filterNode(val, nodeData)
    // 3. 根据返回值决定节点显示/隐藏
    // 4. 更新 DOM 显示
    // 5. 方法执行完毕
    treeRef.value!.filter(val)
})

const defaultProps = {
    children: 'children',
    label: 'label'
}

const treeData = ref<Tree[]>([])
onMounted(async () => {
    const { data } = await cityListApi()
    treeData.value = data
})

const filterNode: any = (value: string, data: Tree) => {
    console.log(value, data)
    // 如果没有搜索词,显示所有节点
    if (!value) return true
    // 返回包含搜索词的节点
    return data.label.includes(value)
}

// 计费模板
const title = ref<string>("")

const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleFormType>>({

})
const ruleForm = ref<RuleFormType>({
    name: "",
    service: "",
    parking: "",
    remarks: "",
    date: [
        { date1: "", date2: "", electricity: "" }
    ]
})
const addTimeSlot = () => {
    ruleForm.value.date.push({ date1: "", date2: "", electricity: "" })
}
</script>