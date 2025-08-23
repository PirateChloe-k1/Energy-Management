<template>
    <el-card>
        <el-radio-group v-model="radio1" size="large" class="mt">
            <el-radio-button label="严重告警" :value="1"> </el-radio-button>
            <el-radio-button label="紧急告警" :value="2"> </el-radio-button>
            <el-radio-button label="重要告警" :value="3"> </el-radio-button>
            <el-radio-button label="一般告警" :value="4"> </el-radio-button>
        </el-radio-group>
    </el-card>
    <el-card class="mt" v-for="item in alarmList" :key="item.equNo">
        <el-alert :title="`${item.address}充电桩充电异常`" type="warning" show-icon/>
        <el-descriptions :border="true" :column="4" direction="vertical" class="mt">
            <el-descriptions-item v-for="(val,key) in item" :label="key">
                <el-tag v-if="key=='level'" :type="val==1?'danger':(val==2?'warning':'info')">
                    {{ val==1?'严重':(val==2?'紧急':'一般') }}
                </el-tag>
                <el-text  type="danger" v-else-if="key=='status'">
                    {{ val==1?'待指派':(val==2?'处理中':'处理异常') }}
                </el-text>
                <span v-else>
                    {{ val }}
                </span>
            </el-descriptions-item>
            <el-descriptions-item label="操作">
                <el-button :type="item.status==2?'warning':'primary'"> {{ item.status==1?"指派":(item.status==2?"催办":"查看") }} </el-button>
            </el-descriptions-item>
        </el-descriptions>
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