
//============================14 =====================
// function unpackGiftbox(giftBox, wish) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 배열 안을 돌다가 wish랑 타입이 다르면 배열이기 때문에 재귀로 들어감
//   // 돌다가 같은 wish와 같은 값이 있으면 true 리턴
//   // 배열 끝까지 가면 false 
//   for(el of giftBox){
//     if(typeof el !== typeof wish){
//       unpackGiftbox(el, wish)
//     }
//     if(el === wish){
//       return true 
//     }
//   } 
//   return false
// }


//// ======================== 13 =======================
// function findMatryoshka(matryoshka, size) {
//   //마트료시카 size가 있으면 true 
//   //만약 size가 다르고 마트료시카의 속성으로 마트료시카가 있으면 재귀로 탐색해 들어가야한다. 
//   //null인데 size가 다르면 false 리턴 

// //멈출 조건 
//   if(matryoshka.size === size){
//     return true
//   }
  
// // 반복 조건 
// if(matryoshka.size > size && matryoshka.matryoshka !== null){
//   return findMatryoshka(matryoshka.matryoshka, size)
// }
// // 리턴
//   return false 
// }
  
//==========================15 =======================
// let newArr = [];

// function flattenArr(arr) {
//   //arr를 돌면서 배열을 만나면 안으로 들오가고 
//   // 양의 정수를 만나면 뺴줘야 댐
//   for(el of arr){
//     if(Array.isArray(el)){
//       return flattenArr(el)
//     } else {
//       newArr.push(el)
//     }

//   return newArr
// }
// }

// let output = flattenArr([[1], 2, [3, 4], 5]);
// console.log(output); // --> [1, 2, 3, 4, 5]

// output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
// console.log(output); // --> [2, 3, 4, 5]