/// <reference types="vite/client" />
declare module "mockjs"
declare module '*.vue'{
    import type { DefineComponent } from 'vue'
    const componentOptions: ConponentOptions
    export default ConponentOptions
}