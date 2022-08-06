// // 내가만든점화 
// function jum (x , y, t){
// for( let i = 1 ; i <= y  ; i++){
//     console.log(x, i)
//     x = x + t
//     }
// }

// jum(1 , 5 , 2)

// // ==============
// 등차수열 for문 
// let result ;

// function forloop(s, t, number){ //s = 시작(초기), t 간격, number 갯수 
//     let acc = 0 ;
//     for(let i = 1; i <= number; i++){
//         if( i == 1) {
//             acc += s;
//         } else {
//             acc += t ;
//         }
//         console.log(i, acc);
//     }
//     return acc;
// }

// result = forloop(3, 2, 5);
// console.log(result);

// // ==========================
// // 등차수열 재귀 
// let result;

// function recursive(s, t, number){
//     if (number == 1){
//         return s;
//     }

//     return recursive(s, t, number - 1) + t;
// }

// result = recursive(3, 2, 5);
// console.log(result);

// // ============================
// //등비수열 

// let result ; 

// function forloop(s, t, number){
//     let acc = 1;
//     for( i = 1 ; i <= number ; i++){
//         if(i == 1){
//             acc = acc * s
//         } else {
//             acc = acc * t
//         };
//     };
//     return acc ;
// }

// result = forloop(3, 2, 10);
// console.log(result);

// // ===========
// // 등비수열 재귀 
// let result ;
// function recursive(s, t, number){
//     if(number == 1){
//        return s ;
//     }

//     return recursive( s, t, number - 1) * t;
// }
// result = recursive(3 , 2 , 5);
// console.log(result);

// // ==============
// // 팩토리얼 재귀 
// let result ; 
// function recursive (number){
//     if(number == 1) {
//         return 1;
//     }

//     return recursive(number -1) * number ;

// }

// result = recursive(5);
// console.log(result);

// //================
// // 피보나치 수열 재귀 
// let result;

// function recursive(number){
//     if(number == 1 || number == 0){
//         return number ;
//     }
//     return recursive(number - 1) + recursive(number - 2 );
// }

// result = recursive(5);
// console.log(result);