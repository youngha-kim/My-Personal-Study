// // || (or 연산자)

// // 피연산자가 불리언일 때
// console.log(true || true)  // true 
// console.log(false || true) // true 
// console.log(true || false) // true 
// console.log(false || false)// false


// // 피연산자가 여러 개인 경우 
// // let result = value1 || value2 || value3;

// // 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가한다. 
// // 각 피연산자를 불린형으로 변환한다. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래값을 반환한다. 
// // 피연산자 모두를 평가한 경후(모든 피연산자가 false로 평가되는 경우)엔 마지막 피연산자를 반환한다.


// console.log(1 || 0) // 1 
// console.log(null || 1) // 1
// console.log(null || 0 || 1) // 1
// console.log(undefined || 0 || null) // null (모두 falsy이므로 마지막 값을 반환한다. )


let clothes = [['yellow_hat', 'headgear'],
['blue_sunglasses', 'eyewear'],
['green_turban', 'headgear']] 

let answer = 1 
var obj={};
for(let arr of clothes){
    obj[arr[1]]=(obj[arr[1]] || 0) + 1;
}
console.log(obj)

