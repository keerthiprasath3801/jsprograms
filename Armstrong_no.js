function isArmstrong(num){
    let numstr=num.toString();
    let numDigits=numstr.length;
    let sum=0;
    for (let digits of numstr){
        sum +=Math.pow(parseInt(digits),numDigits)
    }
    return sum === num
}
let nums=153
if (isArmstrong(nums)) {
  console.log(`${nums} is an Armstrong number.`);
} else {
  console.log(`${nums} is not an Armstrong number.`);
}