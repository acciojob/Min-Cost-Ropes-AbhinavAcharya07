function mincost(arr)
{
 if (arr.length <= 1) return 0;
    arr.sort((a,b)=>a-b);
    let totalCost = 0;
    while(arr.length>1){
        let first = arr.shift();
    let second = arr.shift();
    

    let currentCost = first + second;
    totalCost += currentCost;
    arr.unshift(currentCost);
     rearr(arr);
    }
    return totalCost;
}
 function rearr(a){
        if(a.length<3) return;
        for(let i=0; i<arr.length-1;i++){
            if(a[i]>a[i+1]){
                [a[i],a[i+1]]=[a[i+1],a[i]]
            }
            else break;
        }
    }

module.exports=mincost;
