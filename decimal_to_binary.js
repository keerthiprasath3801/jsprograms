function decimal(num){
    let binary=""
    while(num > 0){
        binary=(num % 2) + binary;
        num=Math.floor(num/2)
    }
    return binary || "0";
}
let no=decimal(25)
console.log(no)