<template>
    <div id="container">

    </div>
</template>

<script setup lang="ts">

import AMapLoader from '@amap/amap-jsapi-loader';
import { onMounted, onUnmounted, ref } from 'vue';
import { mapListApi } from '@/api/map';
import icon from "@/assets/flashIcon.png"
import station from "@/assets/station.jpg"
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
            // 创建信息窗体
            const infoWindow = new AMap.InfoWindow({
                offset: new AMap.Pixel(0, 30)
            })

            // 循环创建标记
            markersData.value.forEach((markerData: any) => {
                const marker = new AMap.Marker({
                    position: markerData.position,
                    icon: icon, //添加 icon 图标 URL
                    title: "北京",
                });
                marker.on("click", () => {
                    // JS代码中使用 ${} 进行模板字符串插值
                    infoWindow.setContent(`
                        <div style="display:flex;padding:10px;align-items:center">
                            <div>
                                <img src="${station}" width="200px"/>    
                            </div>
                            <div style="width:180px;line-height:30px;margin-left:20px">
                                <h3>${markerData.title}</h3>
                                <p>充电桩数量：${markerData.count}</p>   
                                <p>充电站状态：<span style="color:blue">${markerData.status == 1 ? "使用中" : "维护中"}</span></p>    
                            </div>
                        </div>
                    `)
                    infoWindow.open(map,marker.getPosition())
                })
                map.add(marker)
            })
        })
    }).catch((e) => {
        console.log(e);
    });
})

onUnmounted(()=>{
    map?.destory()
})
</script>

<style lang="less" scoped>
#container {
    width: 100%;
    height: 80vh;
}
</style>