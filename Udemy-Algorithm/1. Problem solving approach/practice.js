// 문제 해결 접근법 5. 문제를 복습하고 재구성 하기 

// function CharCount(str){
//     var obj = {};
//     for(var i = 0 ; i < str.length ; i++){
//         var char = str[i].toLowerCase();
//         if(/[a-z0-9]/.test(char)){
//             if(obj[char]>0){
//                 obj[char]++;
//             }else {
//                 obj[char] = 1 ;
//             };
//         }
//     }
//     return obj ;
// }

// output = CharCount("givemeAcall")
// console.log(output)

function CharCount(str){
    var obj = {};
    for(var char of str){
    // 인덱스를 조작할 필요없다면 for of 문을 통해,
    // 쓸데없는 변수를 선언할 필요를 줄인다. 
        char = char.toLowerCase();
        if(isAlphaNumeric(char)){
            obj[char] = ++obj[char] || 1;
            //obj[char]이 참이면 1더한 값을 obj[char]에 할당하고 false이면 1을 할당한다. 
        }
    }
    return obj ;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && //numeric (0-9)
       !(code > 64 && code < 91) && // upper alpha (A-Z)
       !(code > 96 && code < 123)){ // lower alpha (a-z s)
        return false;
       }
       return true;
}

// charCodeAt(0)

output = CharCount("givemeAcall")
console.log(output)
