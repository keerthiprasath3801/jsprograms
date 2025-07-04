function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function arrayoflcm(arr) {
  return arr.reduce((prev, next) => lcm(prev, next), 1);
}
function arrayofgcd(arr){
    return arr.reduce((prev,next) => gcd(prev,next))
}
const gcdno = gcd(15, 18);
const lcmno = lcm(15, 18);
console.log("GCD of the given numbers is:", gcdno);  // 3
console.log("LCM of the given numbers is:", lcmno);  // 90
console.log(arrayoflcm([10, 15, 20]));  // Output: 60
console.log(arrayofgcd([10, 15, 20]));  // Output: 5
