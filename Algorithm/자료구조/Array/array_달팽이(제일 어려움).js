// // 1, 2, 3, 4   0,0 0,1 0,2 0,3
// //12,13,14  5   1,0 1,1 1,2 1,3   
// //11,16,15  6   2,0 2,1 2,2 2,3
// //10  9  8  7   3,0 3,1 3,2 3,3

// //[[1, 2, 3, 4] , [12, 13, 14 ,5 ] , [11,16,15,6] ,[10 ,9 ,8 ,7 ]]
// let n = 4
// let count = 1
// let input = [];
// let result = [];
// for(let j = 0 ; j < n ; j++)
//     result[j] = input;
//     for(let i = 0 ; i < n ; i++  ){
//         input[i] = count++; 
            
//     }


// console.log(result);
// // 1 2 3 4
// // 1 2 3 4
// // 1 2 3 4
// // 1 2 3 4

////==============================================
////풀이 

function answer(length) { 
    let result = [];
    //// 1, result => 2차원 배열 
    for(let i = 0 ; i < length ; i++){
        result[i] = [];
        // [[],[],[],[]]
        }
    //// 2. 패턴 기반으로 반복문 구현 
    ////  1) length 길이만큼 시작해서 숫자를 채움
    ////  2) length - i , 방향 , (오른쪽과 아래 )돌면 반대방향(왼쪽 위)
    ////  2) length ==  0 , 프로그램이 멈춘다. 
    let num, x, y ;
    x = y = num = 0;
   // (0,0) 에서부터 값을 입력하기 위해서.
    let direction = 1 ;

    //length = 4 
    while(1){

        for(let i = 0 ; i < length; i++){ // i = 0,1,2,3
            x += direction; //x = 1 
            result[y][x] = ++num; // y축, x축 만들어서 한번에 핸들링하기. 

        } // r-1 x축이 오른쪽으로 움직이면서 1씩추가 
          // 0,1 0,2 0,3 0,4 = 1 , 2,  3, 4
          // r-2 x축이 direction = -1 로 인해 왼쪽으로 움직이면서 1씩 감소
          //  3,3 3,2 3,1 = 8, 9, 10
          // r-3 
          //  1,2  1,3 = 13 , 14 
          // r- 4 
          //  2,2 = 16

        length-- ; //r1 -  3 , r2 - 2  r3 - 1  r4 - 0, break

        if (length == 0) break; 

        for(let j = 0; j < length; j++){
            y += direction ; // y = 1 
            result[y][x] = ++num; // 1,4 2,4 3,4,   = 5 , 6,  7
                                  // 2,1 1,1        = 11, 12 
                                  // 2,3            = 15
        }                         

        direction *= -1 ; //음수로 방향전환 r2 - 양수로 방향전환
    }
        return result;
}


console.log(answer(4));