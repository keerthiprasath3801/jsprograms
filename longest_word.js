function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Longest word is:", findLongestWord(sentence));  

