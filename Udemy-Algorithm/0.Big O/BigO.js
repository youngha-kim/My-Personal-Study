function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++ ){
        total += i;
    }
    return total;
}
console.log(addUpTo(6));
// 1 + 2 + ~~ + n

function addUpTo2(n){
    return n*(n+1)/2;
}
console.log(addUpTo2(6));

var t1 = performance.now();
addUpTo(100000000);
var t2 = performance.now();
console.log(`time elapesd: ${(t2-t1 / 1000)} seconds.`)

