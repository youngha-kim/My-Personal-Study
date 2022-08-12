// function movingStuff(stuff, limit) {
//   // TODO: 여기에 코드를 작성합니다.
 
    
//   // 순회를 해서 최대값과 최소값을 더해서 limit보다 클경우 최대값을 제거하고 카운트 + 1 => 반복
//    // 만약 stuff를 순회하여 합이 limit가 되면 두 요소를 제거하고 카운트+1
//    // 또는  
//   // 마지막 하나 남으면 카운트+1 하고 count 리턴 

//   let count = 0 ;
//   let max = 40;
//   let min = 240; 
//  const getminmax = (stuff) => {
//   for(let i = 0 ; i < stuff.length ; i++){
//     if(stuff[i] > max){
//       max = stuff[i]
//     } 
//     if(stuff[i] < min) {
//       min = stuff[i]
//     }
//   }
//  }


  

//   console.log(min, max)
// }

// let output = movingStuff([70, 50, 80, 50], 100);
// console.log(output); // 3

// output = movingStuff([60, 80, 120, 90, 130], 140);
// console.log(output); // 4
////========================================
// function partTimeJob(k) {
//   // TODO: 여기에 코드를 작성하세요.
//   let interest = [500, 100, 50, 10, 5]
//   //k를 500으로 나눈 나머지는:
//   let one = 0;
//   let count = 0;
//   for(el of interest){
//     count = count + parseInt(k / el)
//     // console.log(count)
//     if( k % el !== 0 ){
//       k = k % el
//     } 
//     if(k < 5){
//       return count + k
//     }
//   } 
 
//   return count 

// }
// // 4000원을 받았을 때 500원짜리 동전 8개를 반환합니다.
// const output1 = partTimeJob(4000);
// console.log(output1); // --> 8

// // 4972원을 받았을 때 500원짜리 동전 9개, 100원짜리 동전 4개, 50원짜리 동전 1개, 10원짜리 동전 2개, 1원짜리 동전 2개, 총 18개를 반환합니다.
// const output2 = partTimeJob(4972);
// console.log(output2); // --> 18

////=========================

// function boardGame(board, operation) {
//   // TODO: 여기에 코드를 작성하세요.
//   let x = 0;
//   let y = 0;

//   let result = 0;

//   function location(x, y){
//     if(x < 0 || y < 0){
//       return "OUT"     
//     }
//     if(x >= board.length || y >= board.length){
//       return "OUT"     
//     }
    
//       return board[x][y]
//   }

//   for(el of operation){
//     if(el === 'U'){
//       x = x - 1
//       result =  result + location(x, y)
//     }
//     if(el === 'D'){
//       x = x + 1
//       result = result + location(x,y)
//     }
//     if(el === 'L'){
//       y = y - 1
//       result = result + location(x, y)
//     }
//     if(el === 'R'){
//       y = y + 1
//       result = result + location(x, y)
//     }
//   }

//   return result
// };

// const board1 = [
//   [0, 0, 0, 1],
//   [1, 1, 1, 0],
//   [1, 1, 0, 0],
//   [0, 0, 0, 0]
// ]
// const output1 = boardGame(board1, 'RRDLLD');
// console.log(output1); // 4

///===========================5=================
// function rockPaperScissors () {
//   // TODO: 여기에 코드를 작성합니다.
//   let arr = ['rock' , 'paper', 'scissors']
//   let newArr = []

//   for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ; j < arr.length ; j++){
//       for(let z = 0 ; z < arr.length ; z++){
//         newArr.push([arr[i], arr[j], arr[z]])
//       }
//     }
//   }
//   return newArr
//   // 
// };
// // Advanced가 포함된 레퍼런스 코드입니다.
// const rockPaperScissors = function (rounds) {
//   rounds = rounds || 3;
//   const rps = ['rock', 'paper', 'scissors'];
//   const outcomes = [];
//   let permutate = function (roundsToGo, playedSoFar) {
//     if (roundsToGo === 0) {
//       outcomes.push(playedSoFar);
//       return;
//     }

//     for (let i = 0; i < rps.length; i++) {
//       let currentPlay = rps[i];
//       permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
//     }
//   };

//   permutate(rounds, []);

//   return outcomes;
// };
////============================6===================
// function newChickenRecipe(arr,s,choiceNum) {
//   // TODO: 여기에 코드를 작성하세요.
//       //1. 재귀를 멈춰야할 조건
//       if( s === choiceNum ){
//         count++;
//         console.log(arr.join(" "))
//         return;
//     }
//     //2. 재귀를 돌면서 변경되어야 할 부분 / 메인로직
//     for(let i = s ; i < arr.length; i++){ //i = 0 or 1 or 2; 
//         [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
//         console.log(arr)
//         newChickenRecipe(arr, s + 1, choiceNum);
//         [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀
//     }
// }

// // let count = 0
// // const output1 = newChickenRecipe([1, 10, 1100, 1111],0, 2);
// // console.log(count)

// stuffArr = [1, 10, 11000, 1111] 

// let freshArr = [];

// for (let i = 0; i < stuffArr.length; i++) {
//   const element = String(stuffArr[i])
//     .split('')
//     .filter((e) => e === '0');
//   if (element.length <= 2) {
//     freshArr.push(stuffArr[i]);
//   }
// }

// console.log(stuffArr.slice())

// console.log(stuffArr.splice(2,1))


// function boringBlackjack(arr) {
// 	// 조합 요소가 인자로 주어질 경우, 인자 그대로 사용하면 되지만, 인자가 주어지지 않고
// 	// 문제 안에 포함되어 있을 경우 이런 식으로 직접 적어서 사용합니다.
//   let lookup = arr;
//   let result = [];
//   let newArr = [];

//   for (let i = 0; i < lookup.length; i++) {
//     for (let j = i + 1; j < lookup.length; j++) {
//       for (let k = j + 1; k < lookup.length; k++) {
//         let num = lookup[i] + lookup[j] + lookup[k]
//         if(isPirme(num)){
//           result.push(num);
//         }
//       }
//     }
//   }


// function isPirme(el){
//     for(let i = 2; i <  el/2; i++){
//       if(el % i === 0){
//          return false 
//       } 
//     }
//     return true;
// }

//  return result.length
// }

// console.log(boringBlackjack([2, 3, 4, 8, 13]));
const all = "장현준 강민규 강준영 장경훈 조성민 이병훈 강민수 김시연 김정무 김창화 김철영 김형배 김호정 노창용 박성민 박성훈 박준형 변의환 성대한 양현진 윤석근 이도규 이승환 이주성 조영훈 차민재 최진우 최형주 한동수 홍태호 이희중"
const len = "이주성 이승환 노창용 박준형 장현준 이병훈 변의환 강민수 김창화 홍태호 최형주 윤석근 김영하 조성민 박성민 김호정 김시연 이희중 강민규 최진우 김철영 김형배 강준영 양현진 장경훈 차민재"
let all2 = all.split(" ")
console.log(all2.sort())
let len2 = len.split(" ")
console.log(len2.sort())


  for(let y = 0 ; y < all2.length ; y++){
    if(len2.includes(all2[y])){
      continue
    } else {
      console.log(all2[y])
    }
  }
  

// "한동수 조영훈 김정무 성대한 박성훈"
