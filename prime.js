function prime(num){
    if (num < 1) return "not prime"
    if(num === 2) return "prime"
    if(num%2===0) return "not prime"
    const sqr=Math.sqrt(num)
    for(let i=3;i<=sqr;i+=2){
        if(num %i==0) return "not prime"
    }
    return "prime"
}
console.log(prime(27))