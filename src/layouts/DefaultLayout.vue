<template>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.el-aside{
    // 高度为浏览器窗口的高度
    height: 100vh;
    background-color: white;
    box-shadow: 10px 0 8px -2px rgba(0, 0, 0, 0.2);
}
.el-header{
    padding: 0 !important;
}
.el-main{
    // 设置主内容区域的高度为视口高度的80%
    height: 80vh;
    // 当内容超出容器高度时，自动显示滚动条
    overflow: auto;
}
</style>