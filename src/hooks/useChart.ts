import { type Ref, onBeforeUnmount, onMounted, ref, markRaw } from "vue";
import * as echarts from 'echarts';

// chartRef指向在模板中定义的DOM容器
export function useChart(chartRef: Ref<HTMLElement | null>, setChartData: any) {
    const chartInstance = ref<echarts.ECharts | null>(null);

    const initChart = async () => {
        if (chartRef.value) {
            // 创建ECharts实例,使用markRaw让chartInstance实例变为不可响应式的,避免vue的响应式和echarts的响应式冲突
            chartInstance.value = markRaw(echarts.init(chartRef.value));
            // 获取配置对象
            const options = await setChartData()
            // 应用配置，渲染图表
            chartInstance.value.setOption(options)
        }
    }

    const resizeChart = () => {
        chartInstance.value?.resize()
    }

    onMounted(() => {
        initChart()
        window.addEventListener("resize", resizeChart)
    })

    onBeforeUnmount(() => {
        window.removeEventListener("resize", resizeChart)
        if (chartInstance.value) {
            // dispose是echarts里面的方法，用来释放图表所占用的资源，释放图表实例
            chartInstance.value.dispose()
        }
    })

}