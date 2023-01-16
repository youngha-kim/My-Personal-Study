let parsing = parseInt("11", 2);
let parsing2 = parseInt("345fg");
let parsing3 = parseInt("345.45");
let parsing4 = parseInt(345.45);
let parsing5 = parseInt(" 345 45 ");

console.log(parsing, typeof parsing); // 3 number;
console.log(parsing2, typeof parsing2); // 345 number;
console.log(parsing3, typeof parsing3); // 345 number;
console.log(parsing4, typeof parsing4); // 345 number;
console.log(parsing5, typeof parsing5); // 345 number;

let num = 32;
let stringified = num.toString(3); // 1012 string;
let stringified2 = num.toString(16); // 20 string


console.log(stringified, typeof stringified);
console.log(stringified2, typeof stringified2);
