// Record<string, string>是一个工具类型，用于定义一个对象类型
// Record<A,B> A是用来定义属性名的类型 B是用来定义属性值的类型
const fieldLabelMap:Record<string,string>={
    description: "故障描述",
    address: "设备地址",
    equNo: "设备号",
    level: "告警级别",//1严重 2紧急 3一般
    time: "故障时间",
    code: "故障代码",//故障代码
    status: "当前状态",//1待指派 2处理中 处理异常
}

const getLabel=(key:string):string=>{
    // 返回映射的中文标签或默认字段名
    return fieldLabelMap[key] || key
}

export {getLabel}