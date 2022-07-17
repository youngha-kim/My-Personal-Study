// function answer(a, d, n){
//     let index = -1 ;
//     let acc = 0;
//     for(let i = 1;  ; i++ ){
//         if (i == 1){
//             acc = acc + a;
//         } else {
//             acc = acc + d;
//             if (acc == n){
//                 return i ;
//             } else if ( acc > n){
//                 return index;
//             }
//         }      
//     }
// }

// console.log(answer(1, 2, 7));


//// ====================
// ////풀이 
// function answer( a, d, n){
//     let index = -1;

//     let num;
//     for(let i = 1; ;i++){
//         num = a + d * (i - 1);
//         // if = 1 then a = 초항
    

//         if (num > n){
//             index = -1;
//             break;
//         }

//         if (num == n) {
//             index = i ;
//             break;
//         }
//     }
//     return index; 
// }

// console.log(answer(1, 2, 7));

////============================
////풀이 2
function answer(a, d, n){
    let index = -1;

    if((n - a) % d == 0){
        index = (n - a) / d + 1 ;
        // n - a를 하면 d의 총합이 나온다.
        // d로 나오면 d가 몇 번 나오는지 알 수 있다.
        // 여기에 초항 1을 더하면 알고자하는 n이 어디에
        // 위치해 있는지 알 수 있다.
    } else index = -1;
   
    return index; 
}

console.log(answer(1, 2, 7));