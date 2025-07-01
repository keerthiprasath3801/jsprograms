function countEvenOdd(x){
    let even = 0;
    let odd = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log(`Total number of even: ${even}, Total number of odd: ${odd}`);
}
countEvenOdd([2, 4, 3, 2, 1, 3, 4]);

