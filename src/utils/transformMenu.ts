// url作为node-key
function transformMenu(nodes:any){
    return nodes.map((node:any)=>{
        const newNode:any={
            label:node.name,
            url:node.url,
        }
        // 递归
        if(node.children){
            newNode.children=transformMenu(node.children);
        };
        return newNode
    })
}

export {transformMenu}