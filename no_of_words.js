//no of words 
function countWords(str) {
  return str.split(' ').filter(word => word.trim().length > 0).length;
}
console.log(countWords("Hello am a sk"))
