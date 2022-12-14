// 단항 더하기
let x = 1;
let y = -1;
let func = () => {};
console.log(+x); // 1
console.log(+y); // -1
console.log(+""); // 0
console.log(+``); // 0
console.log(+true); // 1
console.log(+false); // 0
console.log(+"HELLO"); // NaN
console.log(+undefined); // NaN
console.log(+null); // 0
console.log(+func); // NaN
console.log(+1n); // TypeError: Cannot convert a BingInt value to a number
