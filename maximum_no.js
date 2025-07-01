const max=function(arr){
    let unique=Array.from(new Set(arr))
    unique.sort((a,b) =>{return b - a} )
    if (unique.length >= 2){
        return unique[0]
    }else{
        return unique[-1]
    }
}
const num=max([1,5,8,6,4,88,88,77,77,66])
console.log(num)