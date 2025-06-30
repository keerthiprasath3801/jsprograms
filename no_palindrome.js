function palindrome(x){
    return x < 0 ? false : x === +x.toString().split('').reverse().join('')
}
console.log(palindrome(121))