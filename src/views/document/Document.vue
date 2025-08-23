<template>
    <div class="mt">
        <span class="title">文章类型：</span>
        <el-tag  class="mr">全部</el-tag>
        <el-tag  class="mr" v-for="item in typeList.type" :key="item">{{ item }}</el-tag>
    </div>
    <div class="mt">
        <span class="title">重要程度：</span>
        <el-tag class="mr">全部</el-tag>
        <el-tag v-for="item in typeList.important" :key="item">{{ item}}</el-tag>
    </div>
    <div class="mt">
        <span class="title">发布渠道：</span>
        <el-tag class="mr">全部</el-tag>
        <el-tag v-for="item in typeList.publish" :key="item">{{ item}}</el-tag>
    </div>
    <el-divider/>
    <div class="mt">
        <span class="title">已选</span>
        <el-tag type="success" closeable>还未填写的标签</el-tag>
    </div>
</template>

<script setup lang="ts">
import { typeListApi } from '@/api/document';
import { onMounted, ref } from 'vue';

interface ListType {
    type: string[],
    important: string[],
    publish: string[]
}

const typeList = ref < ListType > ({ type: [], important: [], publish: [] })

onMounted(async () => {
    const { data } = await typeListApi()
    typeList.value = data
})
</script>

<style lang="less" scoped>
.title {
    display: inline-block;
    width: 80px;
    font-size: 14px;
}

.el-tag {
    cursor: pointer;
}
</style>