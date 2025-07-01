function vowels(str){
    let vow="aeiouAEIOU"
    let count=0;
    for(let ch of str){
        if(vow.includes(ch)){
            count++
        }
    }
    return count
}
console.log(vowels("The vowels"))