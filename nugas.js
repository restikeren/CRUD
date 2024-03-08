function fibonacci(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }

    return fibSeries;
}

console.log("Deret Fibonacci:");
console.log(fibonacci(10));

const calculator = {
    add: (...nums) => nums.reduce((total, num) => total + num, 0),
    subtract: (...nums) => nums.reduce((total, num) => total - num),
    multiply: (...nums) => nums.reduce((total, num) => total * num, 1),
    divide: (...nums) => nums.reduce((total, num) => total / num),
    modulus: (...nums) => nums.reduce((total, num) => total % num)
};

console.log("\nHasil Kalkulator:");
console.log("Penambahan:", calculator.add(9, 4, 2)); 
console.log("Pengurangan:", calculator.subtract(30, 12, 2)); 
console.log("Perkalian:", calculator.multiply(4, 2, 3)); 
console.log("Pembagian:", calculator.divide(40, 4, 2)); 
console.log("Modulus:", calculator.modulus(25, 3)); 
