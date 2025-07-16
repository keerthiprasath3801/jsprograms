function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : '')
    .join(' ');
}

console.log(capitalizeWords("hello   world")); 