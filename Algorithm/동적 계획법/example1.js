// 피보나치 수열
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

// 메모이제이션으로 변환
function fib(n, memo = []) {
  //memo = [undefined, 1,1] 처럼 처음에 넣어줘도 무방
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}

console.log(fib(6, []));

// 타뷸레이션으로 변환
function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fib(6));
