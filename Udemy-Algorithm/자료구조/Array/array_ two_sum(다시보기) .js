// function answer(nums, targat){
//     let result = [];
//    for(i = 0 ; i < nums.length ; i++){
//        for(j = i + 1 ; j < nums.length ; j++){
//            if ((targat - nums[i]) == nums[j]){
//                 result[0] = i;
//                 result[1] = j;
                
//            }
//         }
//    } 


//    return  result ;
// }

// console.log(answer([3, 2, 4], 6));



// 다른 풀이 O[N^2] 였던 전 풀이와는 다르게. 이번 풀이는 for루프 1번만 써서 최적화 시킴.
// 만약 미리 나온 값을 꺼내 쓰고 싶을 때, 그 값와 그 값의 index를 map에 저장해 놓은 다름,
// 그 값이 후에 나올 때 값에 맞는 index를 꺼내 온다는 개념.
function answer(nums, targat){

    let map = {}; // key와 value가 존재 할 수 있음.

    for (let i = 0 ; i < nums.length ; i++){
        if(map[targat - nums[i]] != undefined){ //키가 있는지 판단을 하고, undefined가 아닐 때,
            return[map[targat - nums[i]] , i] ; // 키값에 맞는 value를 index에 저장. (2개)
        }

        map[nums[i]] = i ;  // undefined라면 map에 key와 value를 업데이트함. 예를 들어, map[2] = 3  은 {'2' : 3}
                            // 결국 map에는 nums배열의 값(element)인 2가 map에 key로 들어가게 되고, key에 대한 value가 index로 들어가는 상황
                            // {'2' : 0} 

        console.log(map);
    }
  
    
   return [] ;
}


console.log(answer2([2, 3, 4, 5, 1, 3, 3] , 8));











