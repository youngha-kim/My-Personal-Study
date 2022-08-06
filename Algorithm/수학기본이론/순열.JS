// let input = ["a", "b", "c"];
// let count = 0 ; //경우의 수 몇개 받는지 세기

// function permutation(arr){
//     //for i -> 첫번 쨰 위치시킬 요소 a, b, c [i,0, 0]
//     for (let i = 0 ; i < arr.length; i++){
//         // for j -> e두 번 째 index에 위치시킬 요소 [i, j , 0]
//         for (let j = 0 ; j < arr.length; j++){
//             if( i == j) continue;
//             // for k => 세번째 index 위치시킬 요소 [i,j,k]
//             for(let k = 0 ; k < arr.length; k++){
//                 if (i == k) continue;
//                 if (j == k) continue;
//                 console.log(arr[i], arr[j], arr[k]);
//                 count++;
//             }
//         }
//     }

// }
// permutation(input);
// console.log(count);

////=============================
//// 재귀를 이용한 순열
// let input = ["a", "b", "c"];
// let count = 0 ; //경우의 수 몇개 받는지 세기

// function permutation(arr, s, r){
//     //1. 재귀를 멈춰야할 조건
//     if( s == r ){
//         count++;
//         console.log(arr);
//         return;
//     }
//     //2. 재귀를 돌면서 변경되어야 할 부분 / 메인로직

//     for(let i = s ; i < arr.length; i++){ //i = 0 or 1 or 2; 
//         [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
//         permutation(arr, s + 1, r);
//         [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀
//     }

// }
// permutation(input, 0, 2);
// console.log(count);



let input = ["a" , "b" , "c"];
let count = 0;
let pause ;

function permutation(arr , s , r){
    if (s == r ){
        count++;
        console.log(arr);
        return;        
    }

    for(let i = s ; i < arr.length ; i++ ){
        pause = arr[s];
        arr[s] = arr[i];
        arr[i] = pause;
        // [arr[s] , arr[i]] = [arr[i], arr[s]];
        permutation(arr, s + 1 , r);
        pause = arr[s];
        arr[s] = arr[i];
        arr[i] = pause;
        // [arr[s] , arr[i]] = [arr[i], arr[s]];
    }
}

permutation(input, 0, 2);
