function findmissing(arr){
    arr.sort((a,b) => a - b);
    let missing =[];
    let max=arr[arr.length - 1]
    for(let i=0;i<= max;i++ ){
        if(!arr.includes(i)){
            missing.push(i)
        }
    }
    return missing
}
let input = [1, 2, 5];
console.log("The given array ",input)
let result = findmissing(input);
console.log("Missing numbers are:", result);