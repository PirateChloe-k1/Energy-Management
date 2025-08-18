<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4">
                <!-- 今日总收入 -->
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>今日总收入（元）</h4>
                    </div>
                    <div class="total mt">
                        <h1>{{ formatNumberToThousands(12239824) }}</h1>
                        <div class="percent">-21%</div>
                    </div>
                </el-card>
            </el-col>
            <!-- 本月总收入 -->
            <el-col :span="4">
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>本月总收入 (万元)</h4>
                    </div>
                    <div class="total mt">
                        <h1>{{ formatNumberToThousands(2924) }}</h1>
                        <div class="percent">-21%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <!-- 会员卡储值金额 -->
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>会员卡储值金额 (元)</h4>
                    </div>
                    <div class="total mt">
                        <h1>{{ formatNumberToThousands(239824) }}</h1>
                        <div class="percent">-16%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <!-- 服务费总金额 -->
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>服务费总金额 (元)</h4>
                    </div>
                    <div class="total mt">
                        <h1>{{ formatNumberToThousands(16824) }}</h1>
                        <div class="percent">-7%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <!-- 停车费总金额 -->
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>停车费总金额 (元)</h4>
                    </div>
                    <div class="total mt">
                        <h1>{{ formatNumberToThousands(9687) }}</h1>
                        <div class="percent">-4%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <!-- 电费总金额 -->
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>电费总金额 (元)</h4>
                    </div>
                    <div class="total mt">
                        <h1>{{ formatNumberToThousands(223674) }}</h1>
                        <div class="percent">-19%</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-card class="mt">
            <div ref="chartRef" style="width: 100%;height: 300px;"></div>
        </el-card>
    </div>
</template>
<script setup lang="ts">
import formatNumberToThousands from '@/utils/toThousands';
import { chartApi } from '@/api/chargingstation';
import { ref, reactive } from 'vue';
import { useChart } from '@/hooks/useChart';

const chartRef = ref(null)

const setChartData = async () => {
    const chartOptions = reactive({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: []
        },
        xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
        },
        yAxis: [
            {
                type: 'value',
                name: '销售',
                position: 'left'
            },
            {
                type: 'value',
                name: '访问量',
                position: 'right'
            }
        ],
        series: [
            {
                name: '',
                type: 'bar',
                data: [],
                yAxisIndex: 0,
                itemStyle: {
                    color: '#409eff'
                }
            },
            {
                name: '',
                type: 'line',
                data: [],
                yAxisIndex: 1,
                itemStyle: {
                    color: '#409eff'
                },
                smooth: true
            }
        ]
    });
    const res = await chartApi()
    chartOptions.legend.data = res.data.list.map((item: any) => item.name);
    for (let i = 0; i < res.data.list.length; i++) {
        chartOptions.series[i].name = res.data.list[i].name
        chartOptions.series[i].data = res.data.list[i].data
    }
    return chartOptions
}
useChart(chartRef,setChartData)
</script>

<style lang="less">
.title {
    display: flex;
    align-items: center;

    .round {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgb(235, 236, 245);
        text-align: center;
        line-height: 30px;
        margin-right: 20px;
    }

    h4 {
        color: #666;
    }
}

.total {
    display: flex;
    align-items: center;

    h1 {
        font-size: 30px;
        margin-right: 20px;
    }

    .percent {
        display: inline-block;
        padding: 3px 5px;
        height: 20px;
        font-size: 12px;
        background-color: rgb(235, 247, 239);
        border-radius: 2px;
        color: green;
        line-height: 20px;
    }
}
</style>