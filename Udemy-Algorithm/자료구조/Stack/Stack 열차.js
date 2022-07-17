if(!Array.prototype.peek){
    Array.prototype.peek = function (){
        return this[this.length - 1 ];
    }
}

if(!Array.prototype.isEmpty){
    Array.prototype.isEmpty = function(){
        return this.length === 0;
    };
}


function answer(train){
    let stack = [];
    let num = 0;


    for(let i = 0; i < train.length; i++){
        while(stack.isEmpty() || stack.peek() < train[i]){ 
        //stack에 아무것도 없으면 num을 추가하고, 있으면 들어올 값과 비교하여 그 값이 될때까지 스택을 쌓아줌.
            stack.push(++num);
        }
    
        if(stack.peek() === train[i]){
        // 다시 비교하여 하나씩 제거해주는데, 다른값이 들어오면 순서대로 들어온게 아니니 false를 리턴함.
            stack.pop();
        } else { 
            return false ;
        }
    
    }
   return true;
}



// 1의 첫번쨰와 train의 마지막비교 
// 맞으면 pop, 아니면 하나 제거후 비교 




let input =[

[1, 2, 3, 4],

[2, 1, 3],
 
[4, 3 , 6, 7]

]


for (let i = 0 ; i < input.length ; i++){
    process.stdout.write(`#${i + 1}   `);
    console.log(answer(input[i]));
}
