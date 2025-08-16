import {defineStore} from "pinia";
import {ref} from "vue"
import type{MenuItem} from "@/types/user"
export const useTabsStore=defineStore("tabs",()=>{
    const tabs=ref<MenuItem[]>([{name:"数据看板",url:"/dashboard",icon:"DataLine"}]);
    const currentTab = ref<{name:string,url:string}>({name:"数据看板",url:"/dashboard"})

    const addTab=(name:string,url:string,icon:string)=>{
        if(!tabs.value.some((tab)=>tab.url===url)){
            tabs.value.push({name,url,icon})
        }
    }

    const setCurrentTab = (name:string,url:string) => {
        currentTab.value = {name,url}
    }

    return {tabs,currentTab,addTab,setCurrentTab}
})
