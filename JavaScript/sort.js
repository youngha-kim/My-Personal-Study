const alpha = ["a", "b", "c", "x", "f", "e"];
console.log(alpha.sort()); //[ 'a', 'b', 'c', 'e', 'f', 'x' ]

const array1 = [2, 4, 10, 1, 3];
console.log(
  array1.sort((a, b) => {
    if (a - b > 0) {
      return 1;
    }
    if (a - b < 0) {
      return -1;
    }
    return 0;
  })
);

//compareFunction이 없을시 숫자의 정렬
console.log(array1.sort()); // [ 1, 10, 2, 3, 4 ]

//오름차순 정렬
console.log(array1.sort((a, b) => a - b)); //[ 1, 2, 3, 4, 10 ]

//내림차순 정렬
console.log(array1.sort((a, b) => b - a)); //[ 10, 4, 3, 2, 1 ]

console.log(
  array1.sort((a, b) => {
    console.log(a, b);
    return a - b;
  })
); //[1, 3, 32, 54, 123, 125, 4111]

// 특정한 형태의 데이터를 정렬하기
var newBfcPlayers = [
  { name: "김영하", number: 3 },
  { name: "조성민", number: 13 },
  { name: "김형배", number: 9 },
  { name: "성대한", number: 8 },
];

console.log(
  newBfcPlayers.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  })
); // 김영하 , 김형배, 성대한, 조성민

console.log(
  newBfcPlayers.sort((a, b) => {
    return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
  })
); // 조성민, 성대한, 김형배, 김영하

console.log(
  newBfcPlayers.sort((a, b) => {
    return a.number < b.number ? -1 : a.number > b.number ? 1 : 0;
  })
); // 3, 8, 9, 13

console.log(
  newBfcPlayers.sort((a, b) => {
    return a.number < b.number ? 1 : a.number > b.number ? -1 : 0;
  }) 
); // 13, 9, 8, 3

console.log(
  newBfcPlayers.sort((a,b) => {
    return a.number - b.number 
  })
) // 3, 8, 9, 13
