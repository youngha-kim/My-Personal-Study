//1, 작은 수 부터 차례대로 정렬.
//2. 앞의 것, 뒤에 것 뺀 다음에 가장 작은 수 
//  반환 
// 첫째 가 초항이고 

function answer(a,  b,  c){
 let number = 0;
 let d = 0;
num = [a, b, c];
num.sort((x,y) => x - y);

if (num[1] - num[0] < num[2] - num[1]){
    d = num[1] - num[0];
} else if(num[1] - num[0] > num[2] - num[1]){
    d = num[2] - num [1];
}
// a + (n-1)d

for(let i = 0 ; i < num.length ; i++) {
    console.log(number, a, i, d);
   if ((i * d) + a != num[i]) {
        console.log(number, a, i, d);


       number = (i * d) + a;
       break;
       // 원하는 값을 취했으면 break를 통해 나와야함. break를 통해 나오지 않아서 for문이 한 번 더 돌았고,
       // 그로 인해 number에 원하지 않는 값이 들어와서 문제가 발생하였음.

    }
}
    return number;
}

console.log(answer(3, 8, 18));

// //============================
// //풀이 
// function answer(a,  b,  c){
//     let number = 0;
//     num = [a, b, c];
//     num.sort((x,y) => x - y);

//    // 1. get d -> 등차값 찾기
//    let d = 0;
//    for(let i = 1 ; i <num.length; i++){
//        d += num[i] - num[i -1];
//    }
//    d /= num.length; // 1, 7, 10 -> 6 + 3 = 9 / 3 = d = 3
//   // 모두 더하고 갯수만큼 나누면, 빈 값이 있건 없건 상관없이 d가 나오게 된다.


//    // 2. 빈 index 찾기 
//    let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

//    // 3. 이전 값 + d
//    number = num[0] + d * index ;

//    return number;
//    }
   
//    console.log(answer(1, 7, 10))