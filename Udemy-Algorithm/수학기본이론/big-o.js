function big_o(n){
    let sum = 0;

    for(let i = 1 ; i < n ; i = i * 2){
        sum = sum + 2;
        console.log(sum);
    }
    return sum;
}

console.log(big_o(21));
