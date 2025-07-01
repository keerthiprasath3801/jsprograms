function pair(arr, sum) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}
let result = pair([2, 4, 6, 8, 9], 10);
result.forEach(pair => console.log(`(${pair[0]}, ${pair[1]})`));