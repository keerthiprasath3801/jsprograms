//solution1
function removeDuplicateChars(str) {
  let result = '';
  for (let ch of str) {
    if (!result.includes(ch)) result += ch;
  }
  return result;
}
console.log(removeDuplicateChars("aabbccddeaa")); 
//solution 2
function removeDuplicateChar(str) {
  return [...new Set(str)].join('');
}

console.log(removeDuplicateChar("aabbccddeaa"));