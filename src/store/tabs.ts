import { defineStore } from "pinia";
import { ref } from "vue"
import type { MenuItem } from "@/types/user"
export const useTabsStore = defineStore("tabs", () => {
    const tabs = ref<MenuItem[]>([]);
    const currentTab = ref<{ name: string, url: string }>({ name: "", url: "" })

    const addTab = (name: string, url: string, icon: string) => {
        if (!tabs.value.some((tab) => tab.url === url)) {
            tabs.value.push({ name, url, icon })
        }
    }

    const setCurrentTab = (name: string, url: string) => {
        currentTab.value = { name, url }
    }

    const removeTab = (name: string) => {
        // 如果删除的是当前高亮的标签
        if (currentTab.value.name == name) {
            // 找到当前高亮标签的序号
            const currentIndex = tabs.value.findIndex(tab => tab.name === name)
            // 如果当前点击的标签不是第一个,就可以删除
            if (currentIndex != 0) {
                currentTab.value = tabs.value[currentIndex - 1]
            }else{
                // 如果当前点击的是第一个,就不能删除，直接结束函数
                return
            }
        }
        tabs.value = tabs.value.filter(tab => tab.name !== name)
    }
    return { tabs, currentTab, addTab, setCurrentTab, removeTab }
})