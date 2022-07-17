function answer(nums){
    let result ;
    let sum = 0;
    for(i = 0 ; i < nums.length ; i++){
        sum = sum + nums[i]
    }

    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 1 ; j < nums.length; j++){
            if(nums[i] + nums[j] == sum - 100){
                result = [i , j];
                break
            } 
        }
        if (result.length != 0) break;
    }
    let count = 0;
    let result2 = [];
    for(let i =0 ; i < nums.length; i++){
        if(result[0] != i && result[1] != i){
            result2[count] = nums[i];
            count++; 
        }
    }

return result2; 
}

let input = [25, 23, 11, 2, 18, 3, 28, 6, 37];
console.log(answer(input));