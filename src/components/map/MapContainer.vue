<template>
    <div id="container">

    </div>
</template>

<script setup lang="ts">

import AMapLoader from '@amap/amap-jsapi-loader';
import { onMounted, ref } from 'vue';
import { mapListApi } from '@/api/map';
import icon from "@/assets/flashIcon.png"
let map: any = null;
const markersData = ref<any>([])
onMounted(() => {
    AMapLoader.load({
        // 申请好的Web端开发者Key，首次调用 load 时必填
        key: "98eeef21b65752c518381d82c4ae2db9",
        // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        // 不用2.0版本,因为项目使用的是mock的数据,使用2.0版本有bug
        version: "1.4.15",
        //  需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
        plugins: [],
    }).then((AMap) => {
        // 创建地图实例
        map = new AMap.Map("container", {
            // 设置地图容器id
            viewMode: "3D", // 是否为3D地图模式
            // 初始化地图缩放级别
            zoom: 5,
            center: [116.397428, 39.90923], // 初始化地图中心点位置
        });
        //添加自定义标记
        mapListApi().then(({ data }) => {
            // 存储所有充电站的数据
            markersData.value = data;
            // 循环创建标记
            markersData.value.forEach((markerData: any) => {
                const marker = new AMap.Marker({
                    position: markerData.position,
                    icon: icon, //添加 icon 图标 URL
                    title: "北京",
                });
                map.add(marker)
            })
        })
    }).catch((e) => {
        console.log(e);
    });
})
</script>

<style lang="less" scoped>
#container {
    width: 100%;
    height: 80vh;
}
</style>