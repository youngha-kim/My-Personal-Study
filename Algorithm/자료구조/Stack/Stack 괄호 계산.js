
function answer(str){
    let result = 0 ;
    let stack = [];
    let temp = 1;
//"(" -> *2 , "[" -> *3, ")" -> /2 , "]" -> /3 
// () or [] , 현재 temp 값을 result에 바로 업데이트

for( let i = 0 ; i < str.length ; i++){
    switch (str[i]){
        case "(" :
        temp *= 2;
        stack.push(str[i]);
        break;

        case "[":
        temp *= 3 ;
        stack.push(str[i]);
        break;

        case ")":
            if(stack.length == 0 || stack[stack.length - 1] != "("){
                return 0 ;
            }


            if (str[i-1] == "("){
                result += temp;
                
            }

        stack.pop();
        temp /= 2 ;
        break;

        case "]":
            if(stack.length == 0 || stack[stack.length - 1] != "["){
                return 0 ;
            }


            if (str[i - 1] == "["){
                result += temp;
                    
            }

        stack.pop();
        temp /= 3 ;
        break;

    }

}
    if(stack.length !== 0 ){
        return 0;
    }

   return result;
}

let input =[

"(()[[]])",

"[][]((])",

"(()[[]])([])",
];


for (let i = 0 ; i < input.length ; i++){
    process.stdout.write(`#${i + 1}   `);
    console.log(answer(input[i]));
}
