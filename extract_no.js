function extractNumbers(str) {
  return str.split(/\D+/)
           .filter(item => item !== '')
           .map(Number);
}

console.log(extractNumbers("1a2b3c4")); // [1, 2, 3, 4]