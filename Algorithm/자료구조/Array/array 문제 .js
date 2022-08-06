

// function answer(nums){
//     let result = [];

//     //1. 최소값 구하기 .
//     let min = Number.MAX_SAFE_INTEGER; // 양의 정수의 최대값 반환  
//     for(i = 0 ; i< nums.length ; i++){
//          if (min > nums[i]){
//              min = nums[i]
//          }
//     }

//     //2. 최소값에 해당하는 위치 index.
//     let count = 0; //index 변수를 하나 만든다.
//     for(let i = 0; i < nums.length; i++){
//         if(min == nums[i]){
//             result[count] = i; // 가장 작은 값과 nums의 값이 같은 index를 result에 저장 
//             count++;            // 동시에 count를 1늘려줌으로써 result의 index를 할당가능케함.
//         }
//     }


// return result;
// }
// let input = [4, 5, 7, 4, 8];
// console.log(answer(input));


function answer(nums){
    let result = [];
    let min = nums[0];
    for(let i = 0 ; i < nums.length ; i++){
        if( nums[i] <= min ){
            min = nums[i];
        }
    }

    let count = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(min == nums[i]){
            result[count] = i;
            count++;
        }
    }



    return result;
}


let input = [11, 15, 12, 16, 11, 12];
console.log(answer(input));
