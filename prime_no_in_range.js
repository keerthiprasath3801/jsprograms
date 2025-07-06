function isPrime(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (prime(i)) {
      arr.push(i);
    }
  }
  return arr;
}
function prime(num) {
  if (num < 2) return false;       
  if (num === 2) return true;     
  if (num % 2 === 0) return false; 
  const sqr = Math.sqrt(num);
  for (let i = 3; i <= sqr; i += 2) {
    if (num % i === 0) return false;
  }
  return true;                    
}
console.log(isPrime(1, 50));