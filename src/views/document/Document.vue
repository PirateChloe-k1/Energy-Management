<template>
    <div class="mt">
        <span class="title">文章类型：</span>
        <el-tag disable-transitions :type="currentIndex[0] == -1 ? 'primary' : 'info'" class="mr"
            @click="handleSelect(-1, 0, '')">全部</el-tag>
        <el-tag disable-transitions :type="currentIndex[0] == index ? 'primary' : 'info'" class="mr" v-for="(item, index) in typeList.type"
            :key="item" @click="handleSelect(index, 0, item)">{{ item }}</el-tag>
    </div>
    <div class="mt">
        <span class="title">重要程度：</span>
        <el-tag disable-transitions :type="currentIndex[1] == -1 ? 'primary' : 'info'" class="mr"
            @click="handleSelect(-1, 1, '')">全部</el-tag>
        <el-tag disable-transitions :type="currentIndex[1] == index ? 'primary' : 'info'" class="mr"
            v-for="(item, index) in typeList.important" :key="item" @click="handleSelect(index, 1, item)">{{ item
            }}</el-tag>
    </div>
    <div class="mt">
        <span class="title">发布渠道：</span>
        <el-tag disable-transitions :type="currentIndex[2] == -1 ? 'primary' : 'info'" class="mr"
            @click="handleSelect(-1, 2, '')">全部</el-tag>
        <el-tag disable-transitions :type="currentIndex[2] == index ? 'primary' : 'info'" class="mr"
            v-for="(item, index) in typeList.publish" :key="item" @click="handleSelect(index, 2, item)">{{ item
            }}</el-tag>
    </div>
    <el-divider />
    <div class="mt">
        <span class="title">已选</span>
        <el-tag
        disable-transitions
        type="success" closable class="mr"
        v-for="item in selectedList"
        :key="item"
        @close="handleClose(item.num)">
        {{ item.name }}
        </el-tag>
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

interface SelectType {
    name: string,
    num: number
}

const typeList = ref<ListType>({ type: [], important: [], publish: [] })

onMounted(async () => {
    const { data } = await typeListApi()
    typeList.value = data
})

const currentIndex = ref([-1, -1, -1])

const handleSelect = (index: number, num: number, name: string) => {
    // 看看点击的num是否和selectedList里面已经存在的item的num相同
    const ind: number = selectedList.value.findIndex((item: SelectType) => item.num === num)

    if (!name) {
        // 如果点的是全部,要从已选中删除对应这个类别的数据
        selectedList.value=selectedList.value.filter((item: SelectType) => item.num != num)
    } else {
        // 不相同的话ind就为-1,也就是不存在数组中
        if (ind == -1) {
            selectedList.value.push({ name, num })
        } else {
            // 如果找到了就重新赋值
            selectedList.value[ind] = { name, num }
        }
    }
    currentIndex.value[num] = index
}

// 已经选了的标签
const selectedList = ref<SelectType[]>([])

const handleClose = (num: number) => {
    selectedList.value=selectedList.value.filter((item: SelectType) => item.num != num)
    currentIndex.value[num] = -1
}
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