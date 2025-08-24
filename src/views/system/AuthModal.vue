<template>
    <el-dialog title="权限设置" width="600px" :model-value="visible" @open="handleOpen">
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>页面权限</span>
                </div>
            </template>
            <!-- show-checkbox每个分支前有多选框 -->
            <!-- node-key每个树形结构的唯一标识 -->
            <el-tree 
            ref="treeRef" 
            style="max-width: 600px;" 
            show-checkbox 
            :data="treeData" 
            node-key="url">
            </el-tree>
        </el-card>
    </el-dialog>

</template>

<script setup lang="ts">
import { useUserStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { transformMenu } from '@/utils/transformMenu';

const props = defineProps({
    visible:{
        type:Boolean,
        required:true
    },
    checkedKeys:{
        type:Array,
        required:true
    }
})

const userStore = useUserStore()
const {menu} = storeToRefs(userStore)

const treeData = ref(transformMenu(menu.value)) 

const handleOpen = () => {
    console.log(props.checkedKeys)
}
</script>