function answer(mark){
    let result = 0;
    let count = 0 ;
        for(i = 0 ; i < mark.length ; i++){
            if (mark[i] == 1){
                count = count + 1; 
                result = result + count ;
                
            }  else {
                count = 0;
            }
        }

    return result;
}

console.log(answer([1, 0, 1, 1, 1, 0, 1, 1, 0, 0]));

