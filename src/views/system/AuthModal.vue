<template>
    <el-dialog title="权限设置" width="600px" :model-value="visible"></el-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
    visible:{
        type:Boolean,
        required:true
    }
})

</script>