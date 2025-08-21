<template>
    <el-card>
        <el-radio-group v-model="radio1" size="large" class="mt">
            <el-radio-button label="严重告警" :value="1"> </el-radio-button>
            <el-radio-button label="紧急告警" :value="2"> </el-radio-button>
            <el-radio-button label="重要告警" :value="3"> </el-radio-button>
            <el-radio-button label="一般告警" :value="4"> </el-radio-button>
        </el-radio-group>
    </el-card>
</template>

<script setup lang="ts">
import { ref ,onMounted} from 'vue';
import { alarmListApi } from '@/api/alarm';

const radio1=ref<number>(1)
interface AlarmListType{
    description: string,
    address: string,
    equNo: string,
    // 1严重 2紧急 3一般
    level: number,
    time: string,
    // 故障代码
    code: number,
    // 1待指派 2处理中 处理异常
    status: number,
}
const alarmList = ref<AlarmListType[]>([])

onMounted(async()=>{
    const {data} =await alarmListApi()
    alarmList.value= data
})

</script>