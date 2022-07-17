function answer(blocks){
    let result = 0;
    let count = 0;
    let allsum = 0;
    let height = 0;
    
    //1. 전체 합쳐서 갯수만큼 나눈다.
    for(let i = 0 ; i < blocks.length ; i++){
        allsum = allsum + blocks[i];

    }   
    height = allsum / blocks.length;

   //2. 큰거 - (1.의 결과)와 그것들 합 .
    
    for(let i = 0 ; i < blocks.length ; i++){
        if (blocks[i] > height){
            count = blocks[i] - height;
            result = result + count ;
            // =  result += block[i] - height;
        }
    }
 

    return result;
}
input = [12, 8, 10, 11, 9 , 5, 8]
console.log(answer(input));

