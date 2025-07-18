function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(48, 18)); // 6
console.log(gcd(17, 5));  // 1