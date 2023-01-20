
// 순수함수 
function addItem(arr){
  const copiedArr = [...arr];
  copiedArr.push(5);
  return copiedArr
}

const array = [1,2,3,4]

console.log(addItem(array)) //[ 1, 2, 3, 4, 5 ]


var count = 0;

function pureFunction(n){
  return ++n;
}

console.log(pureFunction(count)) // 1
console.log(count) // 0

// 비순수 함수. 전역 변수 count를 직접 변경시킨다. 
function sideEffectFuntion(){
  return ++ count ;
}
 
console.log(sideEffectFuntion()); // 1 
console.log(count) // 1
