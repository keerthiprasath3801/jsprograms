function findLongestWord(sentence) {
  const words = sentence.split(/\s+/);
  return words.reduce((longest, current) => 
    current.length > longest.length ? current : longest, "");
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
