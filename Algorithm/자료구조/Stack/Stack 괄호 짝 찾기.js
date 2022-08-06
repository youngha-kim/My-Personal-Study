
function answer(str){
//1.짝이 맞는 지 확인
    let result = [];
    let stack = [];
  

    // 1. "(" 를 만나면 스택에 자리값을 추가
    // 2. 가장 처음 만난 ")"를, 스택peek를 pop한 값과 쌍으로 result에 저장 
    // 3. 예외처리 : 남아 있는 값이 있으면, 짝이 안맞기 때문에 [] 반환 
    // 4. 얻어간 기술 = result.push([x, y]) 로 2차원 배열로 저장가능. 
    for(i = 0 ; i < str.length ; i++){
        if(str[i] == "("){
            stack.push(i);
        }   else if( str[i] == ")" ){
            if (stack.length === 0){
                return [];
            } 
 
            result.push([stack.pop(), i]) // 2차원 배열로 push가능
                                          //  
        } 
    }

    if(!stack.length === 0){ // 비어 있찌 않을때){
        return [];
    }



    console.log( stack, result);


//2. 짝이 맞는 위치값 반환, 


   return ;
}

let input =[


"(a+b)",

"(a*(b+c)+d)",

"(a*(b+c)+d)+e)",

];


for (let i = 0 ; i < input.length ; i++){
    process.stdout.write(`#${i + 1}   `);
    console.log(answer(input[i]));
}
