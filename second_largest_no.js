//solution 1 second largest number in a array
const second=function(arr){
    let unique=Array.from(new Set(arr))
    unique.sort((a,b) =>{return b - a} )
    if (unique.length >= 2){
        return unique[1]
    }else{
        return unique[-1]
    }
}
const num=second([1,5,8,6,4,88,88,77,77,66])
console.log(num)
