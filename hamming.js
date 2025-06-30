function hamming(x,y){
    if(x.length !== y.length){
        return "The character length should be equal for both strings" 
    }
    let distance = 0;
    for(i=0;i<x.length;i++){
        if(x[i] !==y[i]){
            distance ++
        }
    }
    return distance
}
console.log(hamming("hell","hrllr"))