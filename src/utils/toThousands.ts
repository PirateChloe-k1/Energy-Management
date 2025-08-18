function formatNumberToThousands(num:number):string{
    if(isNaN(num)||(typeof(num)!="number")){
        throw new Error("必须是一个有效数字")
    }
    // 分为整数部分和小数部分
    const [integerPart,decimalPart]=num.toString().split(".")
    let formatterInteger=""
    for(let i=integerPart.length-1;i>=0;i--){
        // 从后向前拼接
        formatterInteger=integerPart[i]+formatterInteger
        // 从后向前数,每三位加一个分隔符
        if((integerPart.length-i)%3===0&&i!==0){
            formatterInteger=","+formatterInteger
        }
    }
    return decimalPart?`${formatterInteger}.${decimalPart}`:formatterInteger
}
// 因为只有一个文件所以可以默认导出
export default formatNumberToThousands