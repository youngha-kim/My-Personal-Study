
function answer(giraffe){
//1.짝이 맞는 지 확인
    let result = 0;
    let stack = [];
    
  
    giraffe.push(Number.MAX_SAFE_INTEGER);
    for(let i = 0 ; i < giraffe.length ; i++){
        while(stack.length !== 0 && stack[stack.length - 1]["h"] < giraffe[i]  ){
           result += i - stack.pop() ["i"] - 1 ;

        } // while을 사용하면 조건을 걸어서, 예외처리가 가능.
          // 여기서는 while을 돌면서, 참일 경우 계속 돌면서 stack을 비워줌.

          
         // while문을 통해 예외가되는 조건의 경우에만 먼저 동작을 지정해주고, 
         // 나머지는 모두 stack으로 쌓는다.
        stack.push({h: giraffe[i] , i: i} )
        console.log( stack, result);

        //여기서 배운 것 : object 형태로 , 값과 인덱스를 모두 저장해서 , ["key"] 를 통해 접근할 수 있다.

    }



   return result;
}

let input =[


[10 ,3 ,7, 4, 12, 2],

[7, 4, 12, 1, 13, 11, 12, 6],

[20, 1, 19 ,18 ,15, 4, 6, 8, 3, 3],
];


for (let i = 0 ; i < input.length ; i++){
    process.stdout.write(`#${i + 1}   `);
    console.log(answer(input[i]));
}
