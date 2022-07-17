// function answer(height){
//     let str = "\n";
//     let nulstar = [];
//     let star = 0;
//     let nul = 0;
//     // 1. 별 개수를 구함 
//     for( let i = 0; i < height; i++){
//         nul = height - (i + 1);
//         for( j = 0 ; j <= nul ; j++){
//             nulstar[j] = " ";
//         }
        
//         star = (2 * i) + 1;
//         for(j = 0 ; j < star ; j++ ){
//             nulstar[nul+j] = "*"; 
//         }

   
//        console.log(nul, star, nulstar);
//     }

//     input = 3; 
//     console.log(answer(input));


//// 풀이 
////
function answer(height){
    let str = "";
    for(let i = 0 ; i < height ; i++){
        for(let j = 0 ; j < height - i - 1 ; j++ ){
            str = str + " "; //배열에서 push로 추가한다면, 문자열은 + 로 추가할 수 있다. 
         }

        for (let j = 0;  j < i * 2 + 1 ; j++ ){
            str = str + "*";
        }

         str = str + "\n";
    }
    return str;
}

    input = 9; 
    console.log(answer(input));


