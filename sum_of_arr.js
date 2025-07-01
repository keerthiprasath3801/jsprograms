//sum of an array

//solution 1
function sumof(x){
    return x.reduce((prev,next)=>(prev+next),0)
}
const arr=sumof([2,26,88])
console.log(arr)

//solution 2

function total(y){
    let sum=0;
    for(let i=0;i < y.length;i++){
        sum +=y[i]
    }
    return sum
}
console.log(total([2,26,88]))