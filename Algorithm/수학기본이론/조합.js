// for을 이용한 조합 
// let input = [1 , 2, 3 ,4]; // 4C2
// let count = 0;

// function combination(arr){
//     // for -> 뽑는 개수 ==> r == > 2
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1 ; j < arr.length; j++){
//             count++;
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// combination(input);
// console.log(count);

////==========================
// 재귀를 이용한 조합 
 let input = [1 , 2, 3 ,4]; // 4C2
 let count = 0;
 let output = [];

function combination(iarr, oarr, s, idx, r){
                  //input,output,0,   0, 2
    if(s == r){
        count++;
        console.log(oarr);
        return;
    }

    for(let i = idx; iarr.length - i >= r - s; i++ ){
        oarr[s] = iarr[i];
        combination(iarr, oarr, s + 1, i + 1, r);
    }
}

combination(input, output, 0, 0, 2);
console.log(count);