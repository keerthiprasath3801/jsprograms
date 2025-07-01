//sum_of_natural
function natural(n){
    if(n<1) return "invalid"
    if(n===1) return 1
    return n + natural(n-1)
}
console.log(natural(-8))