

// function find_chase(arr){
//     let result = [];
//     let origin = [1, 1, 2, 2, 2, 8];
//     for(let i = 0; i < origin.length ; i++ ){
//         result[i] = origin[i] - arr[i] 

//     }
//     return result;
// }

// input = [0, 1,1,5,3,6];
// console.log(find_chase(input));

////=============== 두 수 최대 합문제 
function answer(nums){
    let result = [];
    if (nums[0] > nums[1]){
        result = [nums[0] , nums[1]];
    } else {
        result = [nums[1], nums[0]];
    }

    for(let i = 2 ; i < nums.length ; i++ ){
        if(nums[i] > result[0]){
            result[1] = result[0]
            result[0] = nums[i];
        } else if (nums[i] > result[1]){
            result[1] = nums[i];
        }
    }

return result; 
}

let input = [-11, 5, 18 ,-2, -3, 6, 4, 17, 10, 9];
console.log(answer(input));

////  ======== 
//// 풀이 
// function answer(nums){
//     let result = [];

//     // result = nums[0] > nums[1] ? [nums[0],nums[1]] : [nums[1], nums[0]];  

//     if (nums[0] > nums[1]){
//         result = [nums[0], nums[1]];
//     } else {
//         result = [nums[1], nums[0]];
//     }

//     for(let i = 2 ; i < nums.length; i++){
//         if (nums[i] > result[0]){
//             result[1] = result[0]; // value shift 이 부분을 생각 못해서 못 풀었다. 
//             result[0] = nums[i];
//         } else if (nums[i] > result[1]){
//             result[1] = nums[i];
//         }
//     }
//     return result;
// // for loop case 1 
// // 5 , -11 
// // 18, 5
// // 18, 6
// // 18 , 17
// //return 18, 17 
// }
// let input = [-11, 5, 18 ,-2, -3, 6, 4, 17, 10, 9];
// console.log(answer(input));