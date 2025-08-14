import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    state:()=>({
        token:null,
        // 权限
        role:[],
    })
})