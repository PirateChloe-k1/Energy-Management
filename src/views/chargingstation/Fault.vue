<template>
    <el-card>
        <el-select style="width: 300px;" placeholder="选择站点名称"></el-select>
    </el-card>

    <el-card class="mt">
        <el-radio-group size="large">
            <el-radio-button label="全部" :value="0" />
            <el-radio-button label="空闲中" :value="1" />
            <el-radio-button label="充电中" :value="2" />
            <el-radio-button label="连接中" :value="3" />
            <el-radio-button label="排队中" :value="4" />
            <el-radio-button label="已预约" :value="5" />
            <el-radio-button label="故障/离线" :value="6" />
        </el-radio-group>
    </el-card>
    <el-card class="mt">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="item">
                    <div class="pic">
                        <p >空闲中</p>
                        <img :src=free width="100px">
                        <!-- <p >充电中</p>
                        <p >连接中</p>
                        <p >排队中</p>
                        <p >已预约</p>
                        <p >故障/离线</p> -->
                        <p>80%</p>
                    </div>
                    <div class="info">
                        <h3>CD1001</h3>
                        <hr class="mb">
                        <p>电压：314v</p>
                        <p>电流：212.2A</p>
                        <p>功率：21KW</p>
                        <p>温度：32°c</p>
                    </div>
                </div>
                <div class="btn">
                    <!-- 分割线 -->
                    <div class="divder"></div>
                    <div>
                        <p class="fl ml" style="font-size: 12px;color: #999;">暂无预警</p>
                        <div class="fr" style="text-align: right;">
                            <el-button size="small">维保记录</el-button>
                            <el-button size="small">使用记录</el-button>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>
<script setup lang="ts">
import free from "@/assets/free.png"
</script>

<style lang="less" scoped>
.item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: rgb(247, 251, 254);
    padding: 20px;
    border-radius: 10px 10px 0 0;
    margin-top: 20px;

    .pic {
        p {
            width: 76px;
            text-align: center;
            margin-bottom: 10px;
            color: rgb(61, 187, 146);
        }
    }

    .info {
        color: #999;
        margin-left: 30px;
        line-height: 26px;
        margin-top: -10px;
    }
}

.btn {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #f7fbfe;

    .divder {
        background-color: #f4f4f4;
        height: 2px;
        width: 95%;
        margin: auto;
    }
}
</style>