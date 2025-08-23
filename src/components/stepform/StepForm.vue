<template>
    <div style="max-width: 600px;">
        <el-steps :active="currentStep" finish-status="success" align-center>
            <el-step v-for="(step, index) in steps" :key="index" :title="step.title" />
        </el-steps>
        <div v-if="currentStep === 0" class="mt">
            <slot name="step-1"></slot>
        </div>
        <div v-if="currentStep === 1" class="mt">
            <slot name="step-2"></slot>
        </div>
        <div v-if="currentStep === 2" class="mt">
            <slot name="step-3"></slot>
        </div>
        <div class="step-buttons">
            <el-button v-if="currentStep > 0">上一步</el-button>
            <el-button type="primary">
                {{ currentStep === steps.length - 1 ? "上一步" : "下一步" }}
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const currentStep = ref<number>(0)

defineProps(["steps"])
</script>